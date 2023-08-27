import Link from "next/link";
import {listPartOne} from "@/data/tasks/partOne/listPartOne";
import {usePathname} from "next/navigation";
import {H} from "@/components";
import styles from './BreadcrumbBar.module.css';

export const BreadcrumbBar = (): JSX.Element => {
  const currentPath = usePathname();
  const filterBreadBar = listPartOne.find(link => `/tasks/part-1/${link.slug}` === currentPath);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.breadcrumb}>
        <li>
          <H tag='h6'><Link className={styles.link} href={'/tasks/part-1'}>Примитивы и циклы</Link></H>
        </li>
        <li>
          <H tag='h6'>&nbsp;/&nbsp;{filterBreadBar?.title}</H>
        </li>
      </ul>
    </div>
  );
};