import { useSelector } from 'react-redux';

import Element from './Element';

const List = () => {
    const rates = useSelector(store => store.rates);
    const ratesElements = rates.map(rate => <Element key={rate.id} {...rate}/>)

    return (  
        <div>
            {ratesElements}
        </div>
    );
}

export default List;