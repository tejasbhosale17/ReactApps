import "./projectCards.min.css";
// import project1 from "";
const ProjectCards = () => {
  return (
    <section className="dark">
      <div className="row pc-row">
        <div className="col-12">
          <div id="content-detail" style={{ opacity: 1, top: 0 }}>
            {/* <!-- Show 3 latest portfolio items --> */}
            <div className="header-center">
              <h3>Some of my latest work</h3>
            </div>
            <ul id="thumbs" className="thumbs clearfix">
              <li style={{ opacity: 1 }}>
                <a href="https://www.adhamdannaway.com/portfolio/ui-design-book">
                  <img
                    src="https://www.adhamdannaway.com/wp-content/uploads/2022/12/feature-ui-design-book.jpg"
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="UI design book"
                    decoding="async"
                    srcSet="https://www.adhamdannaway.com/wp-content/uploads/2022/12/feature-ui-design-book.jpg 628w, https://www.adhamdannaway.com/wp-content/uploads/2022/12/feature-ui-design-book-300x176.jpg 300w"
                    sizes="(max-width: 628px) 100vw, 628px"
                  />
                  <div className="description">
                    <span
                      className="arrow-r"
                      style={{ opacity: 0, right: 10 }}
                    ></span>
                    <h4>My UI design book</h4>
                    <p>Book</p>
                  </div>
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="https://www.adhamdannaway.com/portfolio/creating-a-lean-design-system">
                  <img
                    src="https://www.adhamdannaway.com/wp-content/uploads/2020/08/feature-william-hill-design-system.jpg"
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    decoding="async"
                    srcSet="https://www.adhamdannaway.com/wp-content/uploads/2020/08/feature-william-hill-design-system.jpg 628w, https://www.adhamdannaway.com/wp-content/uploads/2020/08/feature-william-hill-design-system-300x176.jpg 300w"
                    sizes="(max-width: 628px) 100vw, 628px"
                  />
                  <div className="description">
                    <span
                      className="arrow-r"
                      style={{ opacity: 0, right: 10 }}
                    ></span>
                    <h4>Creating a lean design system</h4>
                    <p>Design system</p>
                  </div>
                </a>
              </li>
              <li style={{ opacity: 1 }}>
                <a href="https://www.adhamdannaway.com/portfolio/interior-design-news-feed">
                  <img
                    src="https://www.adhamdannaway.com/wp-content/uploads/2019/04/feature-interior-design-news-feed-2.jpg"
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    decoding="async"
                    srcSet="https://www.adhamdannaway.com/wp-content/uploads/2019/04/feature-interior-design-news-feed-2.jpg 628w, https://www.adhamdannaway.com/wp-content/uploads/2019/04/feature-interior-design-news-feed-2-300x176.jpg 300w"
                    sizes="(max-width: 628px) 100vw, 628px"
                  />
                  <div className="description">
                    <span
                      className="arrow-r"
                      style={{ opacity: 0, right: 10 }}
                    ></span>
                    <h4>Interior design news feed</h4>
                    <p>Side project</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectCards;
