export interface ChildrenProps {
  children: React.ReactNode;
}

export interface AppSelectProps {
  options: {
    value: string;
    label: string;
  }[];
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<any>>;
}

export interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<any>>;
}

export interface CountryProps {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: any;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  tld: string[];
  borders: string[];
  currencies: {
    [key: string]: any;
  };
  languages: {
    [key: string]: any;
  };
}

export interface CountriesProps {
  countries: CountryProps[];
  setCountries: React.Dispatch<React.SetStateAction<CountryProps[]>>;
}
