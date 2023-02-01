export const Manage = ({ element }) => {
    return (
        <div>
            <h3>Manage</h3>
            {element ? JSON.stringify(element) : 'Sin elemento'}
        </div>
    )
}
