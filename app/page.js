import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from '@/components/RCSDemo';
import ServerActionsDemo from "@/components/ServerActionsDemo";

export default function Home() {
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
      <ServerActionsDemo />
    </main>
  );
}
