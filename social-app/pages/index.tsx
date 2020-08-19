// pages/index.tsx
import React from "react";
import { GetServerSideProps } from "next";
import {
  AuthTokens,
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../auth";
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import PersistentDrawerLeft from '../components/PersistentDrawerLeft';
import { withAuthenticator } from 'aws-amplify-react';
import { Amplify, Auth } from 'aws-amplify';

// const Home = (props: { initialAuth: AuthTokens }) => {
//   const auth = useAuth(props.initialAuth);
//   //useAuth hook is supposed to only be called once per page. Not recommended to add the Auth information to `_app.tsx`, as that would force all sites to use server-side rendering!
//   //TODO: create context for auth;
//   const { login, logout } = useAuthFunctions();
//
//   return (
//     <React.Fragment>
//       <div>
//       <PersistentDrawerLeft />
//       <Button variant="contained" color="primary">
//         Primary
//       </Button></div>
//       {auth ? (
//         <button type="button" onClick={() => logout()}>
//           sign out
//         </button>
//       ) : (
//         <React.Fragment>
//           <button type="button" onClick={() => login()}>
//             sign in
//           </button>
//         </React.Fragment>
//       )}
//     </React.Fragment>
//   );
// };
//
// export const getServerSideProps: GetServerSideProps<{
//   initialAuth: AuthTokens;
// }> = async (context) => {
//   const initialAuth = getServerSideAuth(context.req); //returns the auth info of the current user
//
//   return { props: { initialAuth } };
// };
//const { Auth } = withSSRContext()

const Home = () => {
  return (
    <React.Fragment>
      <div>
        hi
      </div>
    </React.Fragment>
  )
}

export default withAuthenticator(Home);
