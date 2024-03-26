import React, { useEffect, useState } from 'react';

export const Test = () => {
    const [car_names, set_car_names] = useState([]);

    const get_data = async() => {
        const req = await fetch('../../API/fetch.php');
        const res = await req.json();
        console.log(res);
    }

    useEffect(() => {
        set_car_names(['auto 1', 'auto 2']);
        get_data();
    }, []);

   

    return (
        <div className='cars'>
            {
                car_names.map(car_name => {
                    return <div>
                        {car_name}
                    </div>
                })
            }
        </div>
    );
}
export default Test;