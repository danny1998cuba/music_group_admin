export const DataTable = ({
    schema = [],
    data = [],
    handler = function (element) {
        console.log(element);
    }
}) => {
    return (
        <div className="table-responsive">
            <table id="data-table-basic" className="table table-striped table-hover">
                <thead>
                    <tr>
                        {schema.map(s => (
                            <th key={s.id}>{s.show}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index) => (
                            <tr
                                onClick={(e) => handler(row)}
                                style={{ 'cursor': 'pointer' }}
                                title="Click para gestionar"
                                key={`${Object.keys(row)[0]}_${index}`}
                            >
                                {schema.map(s => {
                                    return row[s.id] ? <td key={s.id}>{row[s.id].toString()}</td> : <td></td>
                                })}
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        {schema.map(s => (
                            <th key={s.id}>{s.show}</th>
                        ))}
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}
