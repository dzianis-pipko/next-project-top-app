import { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { GetStaticProps } from "next";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">ooo</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
      <Tag>Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag color="grey">Grey</Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Tag href="#">Href</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
