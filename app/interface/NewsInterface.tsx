type NewsType = "news" | "press release";

interface NewsInterface {
  id: string,
  img: string,
  type: NewsType
  title: string,
  desc: string,
}

export type {NewsInterface, NewsType};