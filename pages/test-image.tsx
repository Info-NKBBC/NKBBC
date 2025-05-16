import Image from 'next/image'

export default function TestImage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1>圖片測試頁面</h1>
      <p>測試預覽圖片是否可以正常顯示</p>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Image
          src="/images/og-image.png"
          alt="南科福氣教會標誌"
          width={1200}
          height={630}
          priority
        />
      </div>

      <p>圖片尺寸：1200x630 像素</p>
    </div>
  )
}
