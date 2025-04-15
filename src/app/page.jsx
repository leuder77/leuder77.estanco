import Carta from "@/components/Carta";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default async function Page() {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const documentos = querySnapshot.docs.map((doc) => doc.data())


    return (
            <div className="flex flex-wrap justify-evenly gap-1">
                {documentos.length > 0 ? (
                    documentos.map((doc, index) => (
                        <Carta url={doc.url} nombre={doc.nombre} valor={doc.valor} key={index}/>
                    ))
                ) : (
                    <p>No se encontraron imagenes.</p>
                )}
            </div>
    )
}