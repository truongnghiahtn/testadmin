/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import HeaderAdmin from "./../../../components/headerAdmin/headerAdmin";
const $ = window.$;

export default class Dashboard extends Component {
  componentDidMount() {
    /* Header fixed */

    /* Ripple Effect */

    // Add the element

    // Get the center of the element

    // Add the ripples CSS and start the animation

    /* FullScreen */

    /* Search input */

    /* Counter */

    $(".counter").counterUp({
      delay: 10,
      time: 1000
    });

    /* Wow Animation */

    let wow = new window.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true
    });
    wow.init();

    if ($("#am-3dpie-chart").length) {
      window.am4core.ready(function() {
        // Themes begin
        window.am4core.useTheme(window.am4themes_animated);
        // Themes end

        var chart = window.am4core.create(
          "am-3dpie-chart",
          window.am4charts.PieChart3D
        );
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.legend = new window.am4charts.Legend();

        chart.data = [
          {
            country: "Lithuania",
            litres: 501.9,
            fill: "red"
          },
          {
            country: "Germany",
            litres: 165.8
          },
          {
            country: "Australia",
            litres: 139.9
          },
          {
            country: "Austria",
            litres: 128.3
          },
          {
            country: "UK",
            litres: 99
          },
          {
            country: "Belgium",
            litres: 60
          }
        ];

        var series = chart.series.push(new window.am4charts.PieSeries3D());
        series.colors.list = [
          window.am4core.color("#089bab"),
          window.am4core.color("#FC9F5B"),
          window.am4core.color("#57de53"),
          window.am4core.color("#f26361"),
          window.am4core.color("#ababab"),
          window.am4core.color("#61e2fc")
        ];
        series.dataFields.value = "litres";
        series.dataFields.category = "country";
      }); // end am4core.ready()
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-primary rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-primary">
                        <i className="fas fa-language" />
                      </div>
                      <div className="text-right">
                        <h2 className="mb-0">
                          <span className="counter">5600</span>
                        </h2>
                        <h5>Doctors</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-warning rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-warning">
                        <img src="/assets/images/language/uk_big.png" />
                      </div>
                      <div className="text-right">
                        <h2 className="mb-0">
                          <span className="counter">3450</span>
                        </h2>
                        <h5>Nurses</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-danger rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-danger">
                        <img src="/assets/images/language/france_big.png" />
                      </div>
                      <div className="text-right">
                        <h2 className="mb-0">
                          <span className="counter">3500</span>
                        </h2>
                        <h5>Patients</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-info rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-info">
                        <img src="/assets/images/language/japan_big.png" />
                      </div>
                      <div className="text-right">
                        <h2 className="mb-0">
                          <span className="counter">4500</span>
                        </h2>
                        <h5>Pharmacists</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title"> 3D Pie Chart</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div id="am-3dpie-chart" style={{ height: 500 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
