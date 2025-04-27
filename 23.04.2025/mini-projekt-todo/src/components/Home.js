import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="p-4">
            <h1 className="text-2xl">Willkommen zur App</h1>
            <Link to="/rezepte" className="text-blue-600 underline mt-4 block">
                Zu den Rezepten
            </Link>
        </div>
    );
}
