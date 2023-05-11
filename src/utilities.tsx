



export async function makeApiRequest(url: string, method: string, body?: object, token?: string) {

  interface Options  extends RequestInit {
     method: string
    headers: HeadersInit 
    body? : string
  }
  try {
    const baseUrl = 'https://myclara.com.ng/backend/api';
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    headers.append("Accept", "application/json")
    if (token) {
      headers.append("Authorization", `Bearer ${token}` )
    }


    let options:Options = {
      method,
      headers,
    };
    if (method === "POST" || method === "PUT" || method === "PATCH") {
      options.body = JSON.stringify(body);
    }
    // console.log(options)
    let response = await fetch(baseUrl + url, options);
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
}


export const itemsToShow = [
  // {
  //   id: '0',
  //   label: 'VI- Lagos (Sub region)',
  //   path: 'caas'
  //   },
  {
    id: '0',
    label: '50',
    path: 'caas'
  },
  {
    id: '1',
    label: '100',
    path: 'caas'
  },
  {
    id: '2',
    label: '150',
    path: 'caas'
  },
  {
    id: '3',
    label: '200',
    path: 'caas'
  },
  {
    id: '4',
    label: 'all',
    path: 'caas'
    },

]


 export  const MarketOptions = [
  {
    id: '0',
    label: 'Select Your Area',
    path: 'caas'
    },
 
   {
  id: '1',
  label: 'VI- Lagos (Sub region)',
  path: 'caas'
  },
  {
    id: '2',
    label: 'Ikoyi - Lagos(Sub-region)',
    path: 'caas'
    },{
      id: '3',
      label: 'Ajeromi-Ifelodun Lagos (Sub-region)',
      path: 'caas'
      },{
        id: '4',
        label: 'Ajah-Chevero Lagos (Sub region)',
        path: 'caas'
        },{
          id: '5',
          label: 'Ikeja- Lagos (Sub-region)',
          path: 'caas'
          },{
            id: '6',
            label: 'Surulere -(Sub region)',
            path: 'caas'
            },{
              id: '7',
              label: 'Yaba- Lagos (Sub-region)',
              path: 'caas'
              },{
                id: '8',
                label: 'Lagos Mainland (Ebute-metta Lagos region)',
                path: 'caas'
                },{
                  id: '9',
                  label: 'Alimosho',
                  path: 'caas'
                  },{
                    id: '10',
                    label: 'Mushin Lagos (Sub-region)',
                    path: 'caas'
                    },  
]



















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

export const ratings = <div className='flex items-center'>
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


export const arrowRight = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 ml-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

)

