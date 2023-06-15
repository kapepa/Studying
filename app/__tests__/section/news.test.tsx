import "@testing-library/jest-dom";
import {render, screen, fireEvent, getByText} from "@testing-library/react";
import News from "../../section/News";
import {NewsInterface} from "../../interface/NewsInterface";
import React from "react";

const news: NewsInterface = {
  id: `${Math.random() * 1000}`,
  img: "/image/news-one.png",
  type: "news",
  title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
  desc: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively. Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
};

describe("News", () => {
  const newsList: NewsInterface[] = new Array(3).fill(news);

  beforeEach(() => {
    render(<News main={news} list={newsList}/>)
  })


  it("should be check header", () => {
    expect(screen.getByText(/Lastest News and Resources/i)).toBeInTheDocument();
  })

  it('should be check length news',() => {
    expect(screen.getAllByRole("news")).toHaveLength(3);
  });

  it("should be routing main news click on 'read more...'",async () => {
  //     fireEvent.click(screen.getByText(/Read more/i));
  //
  //     screen.debug();
  })
})