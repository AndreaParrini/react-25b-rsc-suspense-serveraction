/* import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from '@/components/RCSDemo';
import ServerActionsDemo from "@/components/ServerActionsDemo"; */
import fs from 'node:fs/promises';

import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";
import ErrorBoundary from '@/components/ErrorBoundary';

export default async function Home() {
  const fetchUserPromise = new Promise((resolve, reject) => setTimeout(async () => {
    const data = await fs.readFile('dummy-db.json', 'utf-8');
    const users = JSON.parse(data);
    //resolve(users);
    reject(new Error('Error!'));
  }, 2000))
  

  return (
    <main>
      {/* 
      I componenti server possono essere utilizzati all'interno di componenti client SOLO se vengono passati come children come di seguito
      Se importanti all'interno del componente client, di default vengono trasformati in client anche loro.
      <ClientDemo>
        <RSCDemo />
      </ClientDemo> 
      */}
    
      {/* <DataFetchingDemo /> */}
      {/* <ServerActionsDemo /> */}
      <ErrorBoundary fallback={<p>Something went wrong!</p>}>
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo usersPromise={fetchUserPromise}/>
        </Suspense> 
      </ErrorBoundary>

    </main>
  );
}
