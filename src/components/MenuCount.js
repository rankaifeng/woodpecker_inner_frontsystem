import React, { useEffect, useState } from 'react'
import Device from '../page/Device';
import Rentalcost from '../page/Rentalcost';
import Projectcase from '../page/Projectcase';
import Devicetype from '../page/Devicetype';
import Devicegroup from '../page/Devicegroup';
import Failuretype from '../page/Failuretype';
import Construction from '../page/Construction';
import Management from '../page/Management';
import Maintainer from '../page/Maintainer';
import Ower from '../page/Ower';
import Transfer from '../page/Transfer';
import Powerplant from '../page/Powerplant';
export default function MenuCount(props) {

    const [type, setType] = useState('');

    useEffect(() => {
        const { type } = props;
        setType(type);
    }, [props])
    return (
        <div className="cont_right">
            {{
                device: <Device />,
                rentalcost: <Rentalcost />,
                projectcase: <Projectcase />,
                devicetype: <Devicetype />,
                devicegroup: <Devicegroup />,
                failuretype: <Failuretype />,
                construction: <Construction />,
                management: <Management />,
                maintainer: <Maintainer />,
                ower: <Ower />,
                transfer: <Transfer />,
                powerplant: <Powerplant />
            }[type]}
        </div>
    )
}