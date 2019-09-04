import React from 'react'
import './ImportsWA.css'

const ImportsWA = () => {
    return(
        <div className="imports-wa">
            <h2 className="imports-title">Importación de archivos CSV</h2><br />
            <input type="file" name="file" id="file" className="select-file-button" />
            <label for="file" className="select-file-label">Archivo?</label><br />
            <input type="button" value="Upload" className="import-button" />
        </div>
    )
}

export default ImportsWA