import AuthLayout from "../layouts/Authlayout"

export default function layout({children}) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    )
}