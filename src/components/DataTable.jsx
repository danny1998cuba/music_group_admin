import { useEffect, useState } from "react";

const appendScript = (directon, id) => {
    let find = document.querySelector(`script#${id}`)
    if (find) {
        document.body.removeChild(find)
    }

    const script = document.createElement("script");

    script.src = directon;
    script.async = true;
    script.id = id

    document.body.appendChild(script);
}

const flexContainer = {
    minHeight: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const DataTable = ({
    schema = [],
    data = [],
    handler = function (element) {
        console.log(element);
    }
}) => {
    const [scripts, setScripts] = useState(false)

    useEffect(() => {
        console.log('table loaded')
        appendScript(`${process.env.PUBLIC_URL}/js/data-table/jquery.dataTables.min.js`, 'jquery_table')
        appendScript(`${process.env.PUBLIC_URL}/js/data-table/data-table-act.js`, 'table_active')
        setScripts(true)
    }, [])

    return (
        <div className="table-responsive">
            {
                scripts ? <table id="data-table-basic" className="table table-striped table-hover">
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
                </table> :
                    <div style={flexContainer}>
                        <h2>Cargando...</h2>
                    </div>
            }
        </div >
    )
}
