import { Link, Route, Routes } from "react-router-dom";
import AuthProvider from "../../api/AuthContext";
import AdminItemsPage from "./adminItems";

import "../admin.style.css"
import AdminImages from "./adminImages";
import AdminReviewPage from "./adminReviews";
import RecentMounts from "./adminMounts";


export default function AdminHome() {
    

    return <div className="admin">
       
        <div className="container-fluid row">
            <div className="col-lg-1  d-flex flex-column align-items-start border border-3" style={{minHeight:"100vh"}}>
                <Link className="admin-nav-link mb-3" to="/admin/items">Items</Link>
                <Link className="admin-nav-link mb-3" to="/admin/images">Photos</Link>
                <Link className="admin-nav-link mb-3" to="/admin/recent-mounts">Mounts</Link>
                <Link className="admin-nav-link mb-3" to="/admin/reviews">Reviews</Link>
            </div>
            <div className="col-lg-8 mx-auto">
            <h1>Admin</h1>
                <AuthProvider>
                    <Routes>
                        <Route path="/items" element={<AdminItemsPage />} />
                        <Route path="/images" element={<AdminImages />} />
                        <Route path="/reviews" element={<AdminReviewPage />} />
                        <Route path="/recent-mounts" element={<RecentMounts />} />
                    </Routes>
                </AuthProvider>
            </div>
        </div>
    </div>
}