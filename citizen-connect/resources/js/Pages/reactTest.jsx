//import Layout from './Layout'
import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Welcome({ user,auth }) {
  return (
    
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Page 1</h2>}
        >
             <Head title="Bienvenu Ineritia" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> 
                <h1>Welcome</h1>
                <p>Hello {user.name}, welcome to your first Inertia app!</p>
                
                </div>
            </div>
        </AuthenticatedLayout>
    
    
  )
}