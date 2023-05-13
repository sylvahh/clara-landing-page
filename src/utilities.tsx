export async function makeApiRequest(url: string, method: string, body?: object, token?: string) {
  interface Options extends RequestInit {
    method: string;
    headers: HeadersInit;
    body?: string;
  }
  try {
    // https://staging-api.vterminal.ng/api
    // https://myclara.com.ng/backend/api
    // const baseUrl = 'https://staging-api.vterminal.ng/api';
    const baseUrl = 'https://myclara.com.ng/backend/api';
    const headers: HeadersInit = { 'Content-Type': 'application/json', Accept: 'application/json' };
    // headers.append("Content-Type", "application/json")
    // headers.append("Accept", "application/json")
    if (token) {
      headers.Authorization = `Bearer ${token}`;
      // headers.append("Authorization", `Bearer ${token}` )
    }

    let options: Options = {
      method,
      headers,
    };
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      options.body = JSON.stringify(body);
    }
    console.log(options);
    let response = await fetch(`${baseUrl}${url}  `, options);
    let data = await response.json();
    // console.log(data)
    if (!response.ok) {
      // throw new Error(responseHasObj( data.message));
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export type Option = {
  id: string;
  label: string;
  path: string;
};

export const itemsToShow = [
  // {
  //   id: '0',
  //   label: 'VI- Lagos (Sub region)',
  //   path: 'caas'
  //   },
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
  // {
  //   id: '0',
  //   label: 'VI- Lagos (Sub region)',
  //   path: 'caas'
  //   },
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
  <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' className="hidden sm:block">
    <g clip-path='url(#clip0)'>
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
