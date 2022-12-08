document.addEventListener("DOMContentLoaded", async () => {
    const feedList = document.querySelector('#instafeed')
    const igFeed = await fetch('https://feeds.behold.so/QfsgmvBrw3FSNmT5hB8e').then(r => r.json())
    
    for(const image of igFeed) {
        const mediaType = image.mediaType
        if(mediaType === 'VIDEO') {
            console.log('VIDEO')
            console.log(image.mediaUrl)
            const video = document.createElement('video')
            
        } else {
            const div = document.createElement('div')
            const a = document.createElement('a')
            a.href = image.permalink
            a.target = '_blank'
            a.appendChild(div)
            div.style.backgroundImage = `url(${image.mediaUrl})`
            feedList.appendChild(a)
        }
       
    }
});
