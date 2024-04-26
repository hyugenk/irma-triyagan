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
                imageId = '1-gwlL2rYWEhNUteCtMevBW4HfiyXJWVX';
                break;
            case 'downloadButton12':
                imageId = '1-es8KlEYSAtb0nbLUkmdvWxhRZkfiFNF';
                break;
            case 'downloadButton13':
                imageId = '10MoEOTopxBdAUmowffojKXZ6a5MyvZc7';
                break;
            case 'downloadButton14':
                imageId = '113lI5sng0B6zwDi_OiCzymumBr38n60_';
                break;
            case 'downloadButton15':
                imageId = '1-aDEr_3cCMzanBfAbkRIZKqKJw7M9G1V';
                break;
            case 'downloadButton16':
                imageId = '1zpaBJ9wrnFgRwmR-wYFHxjtAJ4j2goVf';
                break;
            case 'downloadButton17':
                imageId = '1-FPjV570waPD3nFr-FxUJhNAowshe8uN';
                break;
            case 'downloadButton18':
                imageId = '105Q3c1R3bTBU_M6Ksla3C0qMZd4qP01Z';
                break;
            case 'downloadButton19':
                imageId = '1-k6CQvONgyn_fQbHNYjpT6_LSTY9c8He';
                break;
            case 'downloadButton20':
                imageId = '104BDw-1rA4Cc3yrLE9cJLTSTwOwHYztf';
                break;
            case 'downloadButton21':
                imageId = '10VMFYI4BW7f3n_SdntNdPGDzjsl82QQR';
                break;
            case 'downloadButton22':
                imageId = '1-7rlJB35whboi6nZWlhxs3H7JF84DHqJ';
                break;
            case 'downloadButton23':
                imageId = '1zqTHZz4YuLWtK7q1M2ETZh20WHZpeErN';
                break;
            case 'downloadButton24':
                imageId = '10RLTHIEMMOqC4iQJofi6HBfVjKgZq5So';
                break;
            case 'downloadButton25':
                imageId = '1-HTx5eKp2kR8BuJgArcV6_-vP1vVzqKH';
                break;
            case 'downloadButton26':
                imageId = '100L1ikXnfgwYbUt6oAn-Ri5Bi950H4IG';
                break;
            case 'downloadButton27':
                imageId = '1-u0WJk5O-nO8uZXsMptE7lZbI1Yi2-o_';
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
                imageId = '1zWqz4d6UWCLHEON_Ov534O5pJZGxOrMG';
                break;
            case 'downloadButton36':
                imageId = '1zWZxJhSDVDB2OU0LKaFw2xA56PPcoqnZ';
                break;
            case 'downloadButton37':
                imageId = '10ikeLZdrrVJkDppMwI2w3pksI2BSsDKW';
                break;
            case 'downloadButton38':
                imageId = '1zlOnU_iD40N3CMmXg5RpWknnJcSSlqQX';
                break;
            case 'downloadButton39':
                imageId = '10yyXD1BWI1VC2l3cxVn9k7pubBzQwj8K';
                break;
            case 'downloadButton40':
                imageId = '1zxllukZbpx0VVprQXZM6xlS3PK3ACaWu';
                break;
            case 'downloadButton41':
                imageId = '1zvJfAJ1KoF-cxyqIh_tFtXk9zozn539U';
                break;
            case 'downloadButton42':
                imageId = '1zDJ0Klt8c_HqToffa6Ddhwg6_XFwJgfi';
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
