const form = document.getElementById('inputForm');
const outputTitle = document.getElementById('title');
const outputImage = document.getElementById('image');
const outputText = document.getElementById('explanation');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicSource = document.getElementById('musicSource');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Convert user input to lowercase for case-insensitive comparison
    const name = document.getElementById('nameInput').value.toLowerCase();
    
    // Stop any currently playing music
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset to start

    if (name === 'sevde' || name === 'sevdenur' || name === 'sevde nur') {
        // Change background color to pink for Sevde or Sevdenur
        document.body.style.backgroundColor = "pink";

        // Content for Sevde
        outputTitle.textContent = `${name.charAt(0).toUpperCase() + name.slice(1)}, you're hot Wine!`;
        outputImage.src = 'img/wine.png'; 
        outputImage.style.display = 'block';
        outputText.textContent = "Glühwein! Noel zamanlarının vazgeçilmezi, soğukluğuyla bilinen Almanların bile içini kıpır kıpır eden eşsiz bir lezzet! Yıllar geçtikçe daha da kıymetli olan bu mükemmel içeceği beğenmeyenler toplum tarafından zevksizlikle suçlanır, dışlanır, akıl sağlıkları sorgulanır. Ama ne şarabın kendisi ne de başka kimse, sıcak şaraptan yana bir şüphe duymaz! Tıpkı bir şarabın yolculuğu gibi, vakit ilerledikçe senin de ömrün daha da güzelleşecek ve hiçbir günün bir öncekini aratmayacak! Çok değerlisin ve bunun farkında ol!";
        
        // Play Sevde's specific music
        musicSource.src = 'audio/sevde-music.mp3'; 
        backgroundMusic.style.display = 'block';
        backgroundMusic.load();
        backgroundMusic.play();
        
    } else if (name === 'yigit' || name === 'yiğit' || name === 'yiğitcan' || name === 'yigitcan' || name === 'ahmet' || name === 'can' || name === 'ahmet yiğit can') {
        // Change background color to gray for lavuk
        document.body.style.backgroundColor = "gray";

        // Content for lavuk
        outputTitle.textContent = `${name.charAt(0).toUpperCase() + name.slice(1)}, sen deve sidiğisin!`;
        outputImage.src = 'img/deve.png'; 
        outputImage.style.display = 'block';
        outputText.textContent = "Söylenecek fazla söz yok, çünkü hepsi kelime israfı. Sen bir loser'sın. Şansını kullanamayan ve sonradan çok üzülecek (olması gerektiği gibi) bir loser. Gelecek, senin için parlak değil. Kendini toplumdan tecrit et ve aynasız bir mahzende kimseye zarar vermeden ömrünü tamamla. Ne demişler, deve şaraptan ne anlar?";
        
        // Play specific music for lavuk
        musicSource.src = 'audio/lavuk-music.mp3'; 
        backgroundMusic.style.display = 'block';
        backgroundMusic.load();
        backgroundMusic.play();
        
    } else {
        // Change background color to lightblue for other names
        document.body.style.backgroundColor = "lightblue";

        // Default content for any other name
        outputTitle.textContent = `${name.charAt(0).toUpperCase() + name.slice(1)}, sen Beypazarı Maden Suyu'sun!`;
        outputImage.src = 'img/beypazari.png'; 
        outputImage.style.display = 'block';
        outputText.textContent = "Siteyi yetiştirmem lazım, çok düşünemedim. Ama bu site eline geçtiyse sen de fena biri değilsindir!";
        
        // No music for other names, so do not show or play audio
        backgroundMusic.style.display = 'none'; // Hide the audio player
    }
});
