(function ($) {
  "use strict";

  $(document).ready(function () {
    // Preloader 
    $(window).on("load", function () {
      let preloader = $(".preloader");
      setTimeout(function () {
        preloader.addClass("hide");
      }, 500);
    });

    // hamburger menu
    $(".hamburger").on("click", function () {
      $(this).toggleClass("active");
      $(".header--right--wrapper").toggleClass("show");
    });

    // upload image
    function upLoadimage() {
      const fileInput = document.getElementById("avatar");
      const imagePreview = document.querySelector(
        ".nr--insert--left--file--uploder"
      );
      const hideSvg = document.querySelector(".nr--gellary--svg");

      fileInput?.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();

          reader.onload = (e) => {
            imagePreview.style.backgroundImage = `url(${e.target.result})`;
            imagePreview.style.backgroundSize = "cover";
            imagePreview.style.backgroundPosition = "center";
            hideSvg.classList.add("hide");
          };

          reader.readAsDataURL(file);
        } else {
          // Handle no file selected
          imagePreview.style.backgroundImage = "none";
        }
      });
    }

    upLoadimage();

    // chart
    function apexChartFun() {
      let chartContainer = document.querySelector("#chartInsights");
      if (chartContainer) {
        var options = {
          series: [
            {
              name: "Sales",
              data: [
                { x: "2019/01/01", y: 0.6 }, // 60%
                { x: "2019/04/01", y: 1.33 }, // 133%
                { x: "2019/07/01", y: 0.6 }, // 60%
                { x: "2019/10/01", y: 1.47 }, // 147%
                { x: "2020/01/01", y: 0.76 }, // 76%
                { x: "2020/04/01", y: 1.5 }, // 150%
              ],
            },
          ],
          chart: {
            type: "bar",
            height: 380,
          },
          plotOptions: {
            bar: {
              distributed: true,
              dataLabels: {
                position: "top",
              },
            },
          },
          colors: [
            "#85CDF1",
            "#FEA500",
            "#85CDF1",
            "#FEA500",
            "#85CDF1",
            "#FEA500",
          ], // Two colors for six bars
          xaxis: {
            type: "category",
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            title: {
              style: {
                fontSize: "14px",
                fontWeight: "bold",
              },
            },
            labels: {
              formatter: function (value) {
                return (value * 100).toFixed(1) + "%";
              },
              style: {
                colors: "#333",
                fontSize: "12px",
              },
            },
          },
          tooltip: {
            y: {
              formatter: function (value) {
                return (value * 100).toFixed(1) + "%"; // Display only percentage
              },
            },
            x: {
              show: false, // Hide x-axis labels (dates)
            },
            marker: {
              show: false, // Hide the marker on hover
            },
            // Hide the tooltip title and series name
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
              const value = series[seriesIndex][dataPointIndex];
              // Return styled tooltip content
              return `
                  <div class="custom-tooltip">
                      ${(value * 100).toFixed(1)}%
                  </div>
              `;
            },
          },
          legend: {
            show: false,
          },
        };

        var chart = new ApexCharts(chartContainer, options);
        chart.render();
      }
    }

    apexChartFun();
  });
})(jQuery);

// ===================================== Nahian Js starts ===================================

// ===================================== Nahian Js end ===================================
