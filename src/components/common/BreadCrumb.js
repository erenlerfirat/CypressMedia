import { Breadcrumb } from 'flowbite-react'

function BreadCrumb() {
    return (
        <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="#" icon={""}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
            <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadCrumb