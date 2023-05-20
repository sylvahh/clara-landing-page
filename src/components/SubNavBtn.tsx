import { downChevron } from '../utilities';
import SubNavDropdown from './SubNavDropdown';

type dropdownProps = {
  showDrawer: boolean;
  setShowDrawer: any;
};

function SubNavBtn({ showDrawer, setShowDrawer }: dropdownProps) {
  return (
    <div className=' cursor-pointer'>
      <li
        // onMouseEnter={() => {
        //   setShowDrawer(true);
        // }}
        // onClick={() => setShowDrawer(!showDrawer)}
        className='capitalize font-bold  text-lg  text-alt-sec active:text-tertiary-100 inline-flex items-center'
      >
        markets {downChevron}
      </li>
      <SubNavDropdown showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </div>
  );
}

export default SubNavBtn;
