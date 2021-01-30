import React, { useState } from 'react';


const useSelect = (stateInit, options) => {

    const [state, setState] = useState(stateInit);
    
    const SelectNews = () => (
        <select 
         className="browser-default"
         value={state}
         onChange={e => setState(e.target.value)}
         >
            {options.map(it => (
                <option key={it.value} value={it.value}>{it.label}</option>
            ))}
        </select>
    )

    return [state, SelectNews];
}
 
export default useSelect;