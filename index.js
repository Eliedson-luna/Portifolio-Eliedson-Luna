document.addEventListener("DOMContentLoaded", () => {

    function handleProjects() {
        try {
            let clickCounter = 0;
            const projectList = document.querySelector('.projects');
            const projects = document.querySelectorAll('.project');
            const nextButton = document.getElementById('next-project');
            const prevButton = document.getElementById('previous-project');
            const totalProjects = projects.length;
            if (clickCounter == 0) { prevButton.style.visibility = 'hidden' }

            prevButton.addEventListener('click', () => {
                clickCounter--;
                projectList.style.transform = `translateX(${-clickCounter * 100}%)`
                nextButton.style.visibility = 'visible';
                if (clickCounter < 0) {
                    clickCounter = 0;
                }

                if (clickCounter === 0) {
                    prevButton.style.visibility = 'hidden';
                }

            })
            nextButton.addEventListener('click', () => {
                clickCounter++;
                prevButton.style.visibility = 'visible'
                projectList.style.transform = `translateX(${-clickCounter * 100}%)`
                if (clickCounter == totalProjects - 1) nextButton.style.visibility = 'hidden';
            })




        } catch (err) {
            console.log(err.message)
        }
    }

    function handleSlides() {
        let slideCounter = 0;
        function slider() {
            try {
                const slidesContainer = document.querySelector('.slides');
                const slides = document.querySelectorAll('.slide');

                const totalSlides = slides.length;

                slideCounter++;
                if (slideCounter >= totalSlides) {
                    slideCounter = 0;
                }
                slidesContainer.style.transform = `translateX(${-slideCounter * 100}%)`;

            } catch (err) {
                console.log(err);
            }
        }
        setInterval(slider, 4000);
    }

    function handleCvDownloader() {
        const btnDownloadCv = document.getElementById('download-cv');
        const cvPath = "/assets/docs/curriculoEliedsonLuna.pdf";
        const archiveName = "curriculoEliedsonLuna.pdf";

        btnDownloadCv.addEventListener('click', (event) => {
            event.preventDefault();

            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = cvPath;
            a.download = archiveName;

            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }

    handleProjects();
    handleSlides();
    handleCvDownloader();
});