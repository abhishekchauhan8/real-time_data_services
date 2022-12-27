function AboutPIServices() {
  return (
    <section id="why-us" class="why-us section-bg">
      <div class="container-fluid" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div class="content">
              <h3>
                Real-Time Data Services is a part of{" "}
                <strong>Shell's overall strategy & Roadmap</strong>
              </h3>
              <p>
                {" "}
                Real-Time Data Services is a single shop for Real-time
                deliverables and solutions for various Business and Operational
                requirements. The solutions are ready-to-use and easy to
                implement.
              </p>
            </div>
            <div class="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    class="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> Ready made templates, tools & techniques to
                    cater all operational needs{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-1"
                    class="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      {" "}
                      Here the business can find templates that can be brought
                      iunto use with minimum efforts
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    class="collapsed"
                  >
                    <span>02</span> Refer to Use-cases to find solution that
                    suits business requirements best{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-2"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p> Choose the best-fit solutions that are easy to find</p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    class="collapsed"
                  >
                    <span>03</span> Upload solutions that can be templatized &
                    addded for others to consider{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-3"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      {" "}
                      Believe that we need to make some changes? Help us improve
                      with your content,
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style={{ backgroundImage: 'url("assets/img/why-us.png")' }}
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            {" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPIServices;
