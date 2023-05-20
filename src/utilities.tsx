export const imageBaseUrl = 'https://myclara.com.ng';

  export const cartPath = window.location.pathname+'/cart'
   

export async function makeApiRequest(url: string, method: string, body?: object, token?: string) {
  interface Options extends RequestInit {
    method: string;
    headers: HeadersInit;
    body?: string;
  }
  try {
    const baseUrl = 'https://myclara.com.ng/engine/api';
    const headers: HeadersInit = { 'Content-Type': 'application/json', Accept: 'application/json' };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    let options: Options = {
      method,
      headers,
    };
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      options.body = JSON.stringify(body);
    }
    let response = await fetch(baseUrl + url, options);
    console.log(response.headers)
    let data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export const getStoreById = async (id: string, storeCase: string) => {
  id = id.toString();
  try {
    switch (storeCase) {
      case 'MARKET_STORES':
        const market_res = await makeApiRequest('/stores-in-martket', 'GET');
        const { store } = market_res.data;
        const stores = store.filter((store: { market_id: string }) => store.market_id === id);
        return stores;
      case 'STORES_PRODUCTS':
        const product_res = await makeApiRequest('/products-in-store', 'GET');
        const { product } = product_res.data;
        const products = product.filter((store: { store_id: string }) => store.store_id === id);
        console.log('products', products);
        return products;
      default:
        break;
    }
  } catch (error) {
    console.warn(error);
    return [];
  }
};

export const storeItem = (id: string, data: any) => sessionStorage.setItem(id, data);
export const getItem = (id: string) => sessionStorage.getItem(id);

export type Option = {
  id: string;
  label: string;
  path: string;
};

export const itemsToShow = [
  {
    id: '0',
    label: '50',
    path: 'caas',
  },
  {
    id: '1',
    label: '100',
    path: 'caas',
  },
  {
    id: '2',
    label: '150',
    path: 'caas',
  },
  {
    id: '3',
    label: '200',
    path: 'caas',
  },
  {
    id: '4',
    label: 'all',
    path: 'caas',
  },
];

export const sortItem = [
  {
    id: '0',
    label: 'featured',
    path: 'caas',
  },
  {
    id: '1',
    label: 'Low to High',
    path: 'caas',
  },
  {
    id: '2',
    label: 'High to Low',
    path: 'caas',
  },
  {
    id: '3',
    label: 'Release date',
    path: 'caas',
  },
  {
    id: '4',
    label: 'Avg. Rating',
    path: 'caas',
  },
];

export const MarketOptions = [
  {
    id: '0',
    label: 'Select Your Area',
    path: 'caas',
  },

  {
    id: '1',
    label: 'VI- Lagos (Sub region)',
    path: 'caas',
  },
  {
    id: '2',
    label: 'Ikoyi - Lagos(Sub-region)',
    path: 'caas',
  },
  {
    id: '3',
    label: 'Ajeromi-Ifelodun Lagos (Sub-region)',
    path: 'caas',
  },
  {
    id: '4',
    label: 'Ajah-Chevero Lagos (Sub region)',
    path: 'caas',
  },
  {
    id: '5',
    label: 'Ikeja- Lagos (Sub-region)',
    path: 'caas',
  },
  {
    id: '6',
    label: 'Surulere -(Sub region)',
    path: 'caas',
  },
  {
    id: '7',
    label: 'Yaba- Lagos (Sub-region)',
    path: 'caas',
  },
  {
    id: '8',
    label: 'Lagos Mainland (Ebute-metta Lagos region)',
    path: 'caas',
  },
  {
    id: '9',
    label: 'Alimosho',
    path: 'caas',
  },
  {
    id: '10',
    label: 'Mushin Lagos (Sub-region)',
    path: 'caas',
  },
];

export const findPaths = (forebiddenPaths: string[] | string): boolean => {
  const path = window.location.pathname;
  if (!forebiddenPaths.includes(path)) return true;
  else return false;
};

// icons and layout utils

export const NO_DATA = <div className="absolute top-10 flex justify-center items-center  w-full h-full">
<h1 className="font-bold text-3xl text-black-sub"> No data was found </h1>
</div>
export const storeNameLoading =  <div className='animate-pulse py-5 w-[25%] bg-gray-200 rounded dark:bg-gray-700'></div>
export  const productLoading = (
  <div
    role='status'
    className='max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700'
  >
    <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700'>
      <svg
        className='w-12 h-12 text-gray-200 dark:text-gray-600'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        fill='currentColor'
        viewBox='0 0 640 512'
      >
        <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
      </svg>
    </div>
    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
    <div className='flex items-center mt-4 justify-between space-x-3'>
           <div className='w-48 h-6 bg-gray-200 rounded-sm dark:bg-gray-700'></div>

      <div>
        <div className='h-8 px-5 py-2 sm:p-3 bg-gray-200 rounded-md dark:bg-gray-700 w-32 mb-2'></div>
      </div>
    </div>
    <span className='sr-only'>Loading...</span>
  </div>
);

export  const marketLoading = (
  <div
    role='status'
    className='max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700'
  >
    <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700'>
      <svg
        className='w-12 h-12 text-gray-200 dark:text-gray-600'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        fill='currentColor'
        viewBox='0 0 640 512'
      >
        <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
      </svg>
    </div>
    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
    <div className='flex items-center mt-4 justify-center space-x-3'>

      <div>
        <div className='h-6 px-5 py-2 sm:p-3  bg-gray-200 rounded-md dark:bg-gray-700 w-32 mb-2'></div>
      </div>
    </div>
    <span className='sr-only'>Loading...</span>
  </div>
);
 
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
);

export const ratings = (
  <div className='flex items-center'>
    <svg
      aria-hidden='true'
      className='w-4 h-4 text-primary'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>First star</title>
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
    </svg>
    <svg
      aria-hidden='true'
      className='w-4 h-4 text-primary'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Second star</title>
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
    </svg>
    <svg
      aria-hidden='true'
      className='w-4 h-4 text-primary'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Third star</title>
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
    </svg>
    <svg
      aria-hidden='true'
      className='w-4 h-4 text-primary'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Fourth star</title>
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
    </svg>
    <svg
      aria-hidden='true'
      className='w-4 h-4 text-gray-300 dark:text-gray-500'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Fifth star</title>
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
    </svg>
    <small>(4.0)</small>
  </div>
);

export const arrowRight = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-5 h-6 ml-1'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
    />
  </svg>
);

export const arrowLeft = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' />
  </svg>
);

export const sortIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
    />
  </svg>
);

export const cart = (
  <svg
    width='25'
    height='25'
    viewBox='0 0 25 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='hidden sm:block'
  >
    <g clipPath='url(#clip0)'>
      <path
        d='M24.4941 3.36652H4.73614L4.69414 3.01552C4.60819 2.28593 4.25753 1.61325 3.70863 1.12499C3.15974 0.636739 2.45077 0.366858 1.71614 0.366516L0.494141 0.366516V2.36652H1.71614C1.96107 2.36655 2.19748 2.45647 2.38051 2.61923C2.56355 2.78199 2.68048 3.00626 2.70914 3.24952L4.29414 16.7175C4.38009 17.4471 4.73076 18.1198 5.27965 18.608C5.82855 19.0963 6.53751 19.3662 7.27214 19.3665H20.4941V17.3665H7.27214C7.02705 17.3665 6.79052 17.2764 6.60747 17.1134C6.42441 16.9505 6.30757 16.7259 6.27914 16.4825L6.14814 15.3665H22.3301L24.4941 3.36652ZM20.6581 13.3665H5.91314L4.97214 5.36652H22.1011L20.6581 13.3665Z'
        fill='currentColor'
      />
      <path
        d='M7.49414 24.3665C8.59871 24.3665 9.49414 23.4711 9.49414 22.3665C9.49414 21.2619 8.59871 20.3665 7.49414 20.3665C6.38957 20.3665 5.49414 21.2619 5.49414 22.3665C5.49414 23.4711 6.38957 24.3665 7.49414 24.3665Z'
        fill='currentColor'
      />
      <path
        d='M17.4941 24.3665C18.5987 24.3665 19.4941 23.4711 19.4941 22.3665C19.4941 21.2619 18.5987 20.3665 17.4941 20.3665C16.3896 20.3665 15.4941 21.2619 15.4941 22.3665C15.4941 23.4711 16.3896 24.3665 17.4941 24.3665Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0'>
        <rect width='24' height='24' fill='white' transform='translate(0.494141 0.366516)' />
      </clipPath>
    </defs>
  </svg>
);

export const trash = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
    />
  </svg>
);

export const exit = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
    />
  </svg>
);
