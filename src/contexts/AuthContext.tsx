import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';

interface AuthContextType {
  user: User | null | undefined;
  role: string | null;
  loading: boolean;
  error: Error | undefined;
}

const AuthContext = createContext<AuthContextType>({ user: undefined, role: null, loading: true, error: undefined });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [role, setRole] = useState<string | null>(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    let unsubscribeDoc: (() => void) | undefined;

    const setupUserDoc = async () => {
      if (user) {
        setRoleLoading(true);
        const userRef = doc(db, 'users', user.uid);
        
        // Listen to document changes to immediately reflect role updates
        unsubscribeDoc = onSnapshot(userRef, async (userSnap) => {
          if (userSnap.exists()) {
            setRole(userSnap.data().role || 'user');
            setRoleLoading(false);
          } else {
            // Create the user
            await setDoc(userRef, {
              email: user.email,
              role: 'user', // Default role
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            });
            // The snapshot listener will fire again once created
          }
        }, (err) => {
          console.error("Error listening to user document", err);
          setRoleLoading(false);
        });
      } else {
        setRole(null);
        setRoleLoading(false);
      }
    };

    if (!loading) {
      setupUserDoc();
    }

    return () => {
      if (unsubscribeDoc) {
        unsubscribeDoc();
      }
    };
  }, [user, loading]);

  const isLoading = loading || (user ? roleLoading : false);

  return (
    <AuthContext.Provider value={{ user, role, loading: isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
