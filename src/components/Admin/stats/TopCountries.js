
import Icon from '../small-comp/Icon';

import Image from '../small-comp/Image';


const Countrydata = [
    { name: 'University of Birmingham', rise: true, value: 21942.83, id: 1 },
    { name: ' University of Sheffield', rise: false, value: 19710.0, id: 2 },
    { name: 'University of York', rise: false, value: 12320.3, id: 3 },
    { name: 'University of Exeter', rise: true, value: 9725.0, id: 4 },
  ];




function TopCountries() {
    return (
      <div className="flex p-4 flex-col h-full">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Top Colleges</div>
          <Icon path="res-react-dash-plus" className="w-5 h-5" />
        </div>
        <div className="">favourites</div>
        {Countrydata.map(({ name, rise, value, id }) => (
          <div className="flex items-center mt-3" key={id}>
            <div className="">{id}</div>
  
            <Image path={`res-react-dash-flag-${id}`} className="ml-2 w-6 h-6" />
            <div className="ml-2">{name}</div>
            <div className="flex-grow" />
            <div className="">{`${value.toLocaleString()}`}</div>
            <Icon
              path={
                rise ? 'res-react-dash-country-up' : 'res-react-dash-country-down'
              }
              className="w-4 h-4 mx-3"
            />
            <Icon path="res-react-dash-options" className="w-2 h-2" />
          </div>
        ))}
        <div className="flex-grow" />
        <div className="flex justify-center">
          <div className="">Check All</div>
        </div>
      </div>
    );
  }





export default TopCountries;  

