for (var i = 1; i <= 42; i++) {
    var downloadButton = document.getElementById('downloadButton' + i);
    downloadButton.addEventListener('click', function() {
        var imageUrl = 'https://drive.google.com/uc?export=download&id=';
        var imageId = ''; // ID gambar yang sesuai
        // Tentukan ID gambar sesuai dengan nomor tombol download
        switch (this.id) {
            case 'downloadButton1':
                imageId = '102BcU0ttk9etWalyEbY3SLQPUDjZgGYF';
                break;
            case 'downloadButton2':
                imageId = '10NSFmGdx_5Z8lPs6oCHb39VP7UDBT3Z4';
                break;
            case 'downloadButton3':
                imageId = '1zndVTQZxS92RJKjMRAL10abMfplbKD-M';
                break;
            case 'downloadButton4':
                imageId = '1-ojJl-D8XWpK4pg8lnks8tlgNdtlRTqj';
                break;
            case 'downloadButton5':
                imageId = '10k-tcL0qnVZLsct1-qVzVuCtjwNA00Up';
                break;
            case 'downloadButton6':
                imageId = '103CeMB-oa5J6_C896s-zGifpViWcqeKT';
                break;
            case 'downloadButton7':
                imageId = '10uWbtdsibX3KMsn6ReOuHcZR_P1Omicb';
                break; 
            case 'downloadButton8':
                imageId = '10pyLfUXcRd89_gcyIdh-8uiv-Mipc80_';
                break;
            case 'downloadButton9':
                imageId = '1-7a25wJmZg8aghA7CTxHsy4-Mq6oRHz9';
                break;
            case 'downloadButton10':
                imageId = '1-6Lc3LwH_trrWVn2ADxGkISe-ABMu06n';
                break;
                
            case 'downloadButton11':
                imageId = '10Z5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton12':
                imageId = '10a5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton13':
                imageId = '10b5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton14':
                imageId = '10c5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton15':
                imageId = '10d5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton16':
                imageId = '10e5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton17':
                imageId = '10f5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton18':
                imageId = '10g5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton19':
                imageId = '10h5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton20':
                imageId = '10i5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton21':
                imageId = '10j5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton22':
                imageId = '10k5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton23':
                imageId = '10l5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton24':
                imageId = '10m5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton25':
                imageId = '10n5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton26':
                imageId = '10o5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton27':
                imageId = '10p5Z1v0F6q8I2J7zV5XJ4cV9h9Q5J3fY';
                break;
            case 'downloadButton28':
                imageId = '1zOs3QPifZjK3-R8_1GqQSVy9DolRt4Mu';
                break;
            case 'downloadButton29':
                imageId = '1zUOnuM0gFZSvOXpZpSLiOESaNDbkMo31';
                break; 
            case 'downloadButton30':
                imageId = '1zQbSHAnsz6zXXAHSZdcAnchRCStbQe2g';
                break;
            case 'downloadButton31':
                imageId = '10EmgdJ0LAyDX61NHUQPeHEnwNMFQGLZf';
                break;
            case 'downloadButton32':
                imageId = '1zO6Gp_Dpm8v9QwzMMebNjbjH7_hTu3aK';
                break;
            case 'downloadButton33':
                imageId = '1zJ0prNgPrrUZllsUho56QpCSm-wCjPTB';
                break;
            case 'downloadButton34':
                imageId = '1znd7UDw8FQ32JhKg6ESrvnYhTp_oRjXo';
                break;
            case 'downloadButton35':
                imageId = '';
                break;
            case 'downloadButton36':
                imageId = '';
                break;
            case 'downloadButton37':
                imageId = '';
                break;
                



            // Lanjutkan dengan cara yang sama untuk setiap tombol download
            default:
                break;
        }
        imageUrl += imageId;
        var link = document.createElement('a');
        link.href = imageUrl;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
