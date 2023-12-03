'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MdSearch } from 'react-icons/md';
import { useDebouncedCallback } from 'use-debounce';
import styles from './search.module.css';

const Search = ({ placeholder }: any) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1')

    if (e.target.value.length > 2) {
      params.set("q", e.target.value);
    }
    else {
      params.delete("q");
    }

    replace(`${pathName}?${params}`);
  }, 400);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
