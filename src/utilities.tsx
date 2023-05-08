export const findPaths = (forebiddenPaths: string[] | string): boolean => {
  const path = window.location.pathname;
  if (!forebiddenPaths.includes(path)) return true;
  else return false;
};

export const downChevron = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={2.0}
    stroke='currentColor'
    className='w-4 h-4 ml-1'
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
  </svg>
);

export const usericon = (
  <svg
  xmlns='http://www.w3.org/2000/svg'
  fill='none'
  viewBox='0 0 24 24'
  strokeWidth={1.5}
  stroke='currentColor'
  className='w-7 h-7'
>
  <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
  />
</svg>
)