import React from "react";
import SimpledHero from "../components/SimpledHero";
import Head from "next/head";
import AccordionItem from "../components/AccordionItem";
import CopyrightText from "../components/CopyrightText";

const SKPengguna = () => {
    return (
        <>
            <Head>
                <title>Syarat & Ketentuan Pengguna AlinaMed Indonesia</title>
                <meta name="keywords" content="medika" />
            </Head>
            <SimpledHero
                title="Syarat & Ketentuan Pengguna"
                sub="AlinaMed menyediakan dan menjelaskan syarat dan
                        ketentuan untuk pengguna"
            />
            {/* Accordion */}
            <div className="container mx-auto my-14 xl:px-12 lg:px-36 md:px-20 sm:px-10 px-8">
                <AccordionItem
                    title="PENTING!"
                    desc={`<p class="text-justify tracking-tight">
                    Sebagai pengguna Platform (sebagaimana didefinisikan di
                    bawah), Anda diwajibkan untuk membaca Syarat dan
                    Ketentuan Penggunaan ini (“Ketentuan Penggunaan”) dan
                    Kebijakan Privasi yang terlampir dengan hati-hati dan
                    seksama sebelum mengunduh mau pun menggunakan setiap
                    fitur dan/atau layanan yang tersedia dalam Platform.
                    Dengan mengunduh dan/atau memasang dan/atau menggunakan
                    Platform dan/atau menikmati Layanan Kami, Anda setuju
                    bahwa Anda telah membaca, memahami, mengetahui,
                    menerima, dan menyetujui seluruh informasi,
                    syarat-syarat, dan ketentuan-ketentuan penggunaan
                    Platform yang terdapat dalam Ketentuan Penggunaan ini.
                    <br />
                </p>
                <p class="text-justify tracking-tight mt-3">
                    Ketentuan Penggunaan ini merupakan suatu perjanjian sah
                    terkait tata cara dan persyaratan penggunaan Platform
                    antara Anda dengan pengelola Platform yaitu
                    <span class="text-primary">
                        PT Alina Medika Indonesia (“Kami”)
                    </span>
                    . Mohon diperhatikan bahwa Ketentuan Penggunaan dan
                    Kebijakan Privasi dapat diperbarui dari waktu ke waktu.
                    Silakan menghapus Aplikasi dalam perangkat elektronik
                    Anda dan/atau mengajukan permintaan penghapusan akun
                    dan/atau tidak mengakses Platform dan/atau tidak
                    menggunakan Layanan Kami apabila Anda tidak setuju
                    terhadap Ketentuan Penggunaan ini (sebagaimana
                    diperbarui dari waktu ke waktu). Kami berhak untuk
                    sewaktu-waktu mengubah, menghapus, dan/atau menerapkan
                    syarat dan ketentuan baru dalam Ketentuan Penggunaan
                    ini. Pemakaian Anda yang berkelanjutan terhadap Platform
                    akan dianggap sebagai persetujuan untuk tunduk kepada
                    perubahan atas syarat dan ketentuan dari Ketentuan
                    Penggunaan ini.
                </p>`}
                    show={true}
                />
                <AccordionItem
                    title="Ketentuan Umum"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    a. Platform adalah aplikasi (versi Android atau iOS), aplikasi web (aplikasi yang dapat diakses menggunakan web), website yang dikelola oleh Kami sebagaimana diperbarui dari waktu ke waktu.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    b. Koneksi internet diperlukan untuk dapat menggunakan Layanan. Segala biaya yang timbul atas koneksi perangkat elektronik Anda dengan jaringan internet merupakan tanggung jawab Anda sepenuhnya.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    c. Platform berfungsi sebagai sarana untuk menghubungkan Anda dengan pihak ketiga yang menyediakan layanan atau menjual barang kepada Anda seperti (tetapi tidak terbatas pada) Tenaga Medis, apotek, laboratorium, dan/atau jasa pengantaran (“Penyedia Layanan”).
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    d. Jenis layanan yang dapat digunakan melalui Platform adalah:
                    <br/> i. Pemeriksaan mandiri resiko Covid-19;
                    <br/> ii. Pelaporan kondisi harian;
                    <br/> iii. Puskesmas;
                    <br/> iv. Layanan lain yang dapat Kami tambahkan dari waktu ke waktu;
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    e. Aplikasi web merupakan fitur yang berfungsi sebagai sarana Pengguna untuk mengakses beberapa Layanan Kami tanpa perlu mengunduh Aplikasi (“Aplikasi Web”).
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    f. Kartu Kredit adalah sebuah alat pembayaran pengganti uang tunai dalam bentuk kartu yang diterbitkan oleh bank (“KARTU KREDIT”).
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    g. Untuk menghindari keraguan, Kami bukan merupakan penyelenggara pelayanan kesehatan, apotek, tempat penyelenggaraan praktik medis, maupun penyedia jasa pengantaran. Kami tidak mempekerjakan Penyedia Layanan dan Kami tidak bertanggung jawab atas setiap tindakan dan/atau kelalaian dari Penyedia Layanan. Platform ini hanya merupakan sarana untuk memudahkan pencarian atas Layanan.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    h. Kami dapat menggunakan jasa pihak ketiga terkait penyediaan layanan pembayaran. Karena itu segala bentuk kegagalan sistem terkait yang disebabkan hal yang di luar kendali Kami terkait dengan layanan pembayaran yang disediakan pihak ketiga adalah di luar tanggung jawab Kami. Namun demikian, Kami akan berupaya maksimal untuk membantu menyelesaikan masalah yang mungkin timbul. Penyedia jasa perbankan/pembayaran yang dipilih oleh Anda dapat mengenakan biaya tambahan kepada Anda atas layanan yang diberikan.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    i. Kami tidak berada dalam posisi untuk memberikan saran kepada Anda dalam memilih dokter, apotek, dan puskesmas yang dapat diakses melalui Platform.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    j. Platform memungkinkan Anda untuk mengirimkan permintaan atas suatu Layanan kepada Penyedia Layanan. Penyedia Layanan memiliki kebijakan sendiri dan kewenangan penuh untuk menerima atau menolak setiap permintaan Anda atas Layanan, hal mana adalah di luar kendali Kami dan karenanya bukan merupakan tanggung jawab Kami. Jika Penyedia Layanan menerima permintaan Anda, Platform akan memberitahu Anda dan memberikan informasi mengenai Penyedia Layanan, termasuk nomor order dan kemampuan untuk menghubungi Penyedia Layanan melalui telepon.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    k. Kami berhak sewaktu-waktu mengubah, menghapus, mengurangi, menambah dan/atau memperbarui fitur atau fasilitas dalam Platform. Pemakaian Anda yang berkelanjutan terhadap Platform akan dianggap sebagai persetujuan kepada perubahan, penghapusan, pengurangan, penambahan dan/atau pembaruan fitur atau fasilitas Platform.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    l. Anda dapat memberikan informasi mengenai Data Pribadi dan riwayat kesehatan, dan Kami akan menyimpan serta menampilkannya dalam akun Anda. Kerahasiaan data Anda terjamin dan akan digunakan oleh Kami dan/atau Penyedia Layanan untuk keperluan interaksi dengan dokter dan keperluan pemesanan obat serta layanan-layanan lain yang dilakukan di dalam Platform dan/atau tujuan lain yang telah Anda setujui sesuai dengan ketentuan perundang-undangan yang berlaku dan Kebijakan Privasi.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    m. Anda memahami dan menyetujui bahwa percakapan Anda dengan customer service Kami akan tersimpan secara otomatis dan diarsipkan untuk keperluan legal dan peningkatan kualitas pelayanan Kami. Kerahasiaan percakapan Anda terjamin dan informasi tidak akan disebarluaskan.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    n. Anda memahami dan menyetujui bahwa komunikasi Anda dengan fasilitas pelayanan kesehatan yang terhubung melalui nomor telepon pada website kami tersimpan secara otomatis dan diarsipkan untuk keperluan legal dan peningkatan kualitas pelayanan Kami. Kerahasiaan percakapan Anda terjamin dan informasi tidak akan disebarluaskan.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    o. Kami berhak untuk tidak memproses registrasi, membatasi atau menghentikan penggunaan Platform Anda jika Kami memiliki alasan untuk mencurigai bahwa Anda telah melanggar ketentuan dari Ketentua n Penggunaan ini atau peraturan perundang-undangan yang berlaku.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Ketentuan Penggunaan Platform"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    a. Anda menyatakan dan menjamin bahwa Anda adalah individu yang memiliki hak untuk mengadakan perjanjian yang mengikat berdasarkan hukum Republik Indonesia dan bahwa Anda telah berusia minimal 21 (dua puluh satu) tahun atau sudah menikah dan tidak berada di bawah perwalian atau pengampuan. Jika Anda berusia di bawah 21 tahun dan belum menikah, Anda menyatakan dan menjamin bahwa Anda telah memperoleh izin dari orang tua atau wali hukum Anda, kecuali Anda menyatakan sebaliknya. Dengan memberikan persetujuan, orang tua atau wali hukum Anda setuju untuk bertanggung jawab atas: (i) semua tindakan Anda terkait akses ke dan penggunaan Platform dan/atau Layanan; (ii) biaya apa pun terkait penggunaan Anda atas Layanan apa pun; dan (iii) kepatuhan Anda terhadap Syarat dan Ketentuan ini. Kami berhak untuk menutup atau membatalkan akun Anda apabila hal tersebut tidak benar. Anda selanjutnya menyatakan dan menjamin bahwa Anda memiliki hak, wewenang dan kapasitas untuk menggunakan Layanan dan akan senantiasa mematuhi Ketentuan Penggunaan. Jika Anda mendaftarkan atas nama suatu badan usaha, Anda juga menyatakan bahwa Anda berwenang untuk bertindak untuk dan atas nama badan hukum tersebut dan untuk mengadakan dan mengikatkan badan hukum/entitas tersebut pada Ketentuan Penggunaan Platform.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    b. Anda dapat menggunakan Platform dengan terlebih dahulu melakukan pendaftaran yang disertai pemberian informasi data pribadi Anda sebagaimana diminta dalam Platform (“Data Pribadi”). Informasi terkait Data Pribadi yang diberikan hanya akan digunakan oleh Kami dan/atau Penyedia Layanan untuk pemberian layanan-layanan dalam Platform dan untuk tujuan lain yang telah Anda setujui sesuai dengan ketentuan perundang-undangan yang berlaku. Kebijakan Privasi yang terlampir (sebagaimana dimutakhirkan dari waktu ke waktu) menjadi bagian yang tidak terpisahkan dari Ketentuan Penggunaan ini. Anda harus memberikan informasi yang akurat dan lengkap, memperbarui informasi dan setuju untuk memberikan kepada kami bukti identitas apapun yang secara wajar dapat kami mintakan. Jika terdapat perubahan pada Data Pribadi yang Anda berikan kepada kami, misalnya, jika Anda mengubah nomor telepon, Anda wajib memperbarui rincian informasi Anda dengan mengirimkan permintaan Anda kepada kami.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    c. Setelah mendaftarkan diri pada Platform, Anda akan mendapatkan suatu akun pribadi yang dapat diakses dengan One Time Password (OTP) yang akan dikirimkan ke nomor telepon seluler Anda. Anda berjanji untuk tidak menyerahkan, mengalihkan maupun memberikan wewenang kepada orang lain untuk menggunakan identitas Anda atau menggunakan akun Anda. Anda wajib menjaga kerahasiaan kata sandi akun Anda dan setiap identifikasi yang kami berikan kepada Anda atas akun atau Data Pribadi Anda. Dalam hal terjadi pengungkapan atas kata sandi Anda yang terjadi bukan atas kesalahan Kami, dengan cara apapun yang mengakibatkan penggunaan yang tidak sah dan tanpa kewenangan atas akun atau Anda, transaksi maupun pesanan atas Layanan yang dilakukan melalui Platform masih akan dianggap sebagai transaksi maupun pesanan yang sah kecuali apabila Anda telah memberitahu Kami tentang hal tersebut sebelum Penyedia Layanan memberikan Layanan yang diminta.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    d. Anda diharuskan untuk melaporkan kepada Kami bila Anda, oleh sebab apapun, tidak memiliki kontrol atas akun Anda. Anda bertanggung jawab atas setiap penggunaan akun Anda dalam Platform meskipun jika Akun tersebut telah disalahgunakan oleh orang lain.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    e. Anda tidak diperkenankan untuk membahayakan, menyalahgunakan, mengubah atau memodifikasi Platform dengan cara apapun. Kami berhak untuk menutup atau membatalkan akun Anda dan melarang Anda untuk menggunakan Platform lebih lanjut jika Anda menggunakan Platform tanpa mematuhi Ketentuan Penggunaan ini.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    f. Anda memahami dan setuju bahwa penggunaan Platform oleh Anda akan tunduk pula pada Kebijakan Privasi Kami sebagaimana berlaku dari waktu ke waktu. Dengan menggunakan Platform, Anda juga memberikan persetujuan sebagaimana dipersyaratkan berdasarkan Kebijakan Privasi kami.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    g. Anda berjanji bahwa Anda akan menggunakan Platform hanya untuk tujuan yang dimaksud untuk mendapatkan Layanan. Anda tidak diperbolehkan untuk menyalahgunakan atau menggunakan Platform untuk aktivitas yang bertentangan dengan hukum, termasuk namun tidak terbatas kepada tindak pidana pencucian uang, pencurian, penggelapan, terorisme maupun penipuan. Anda juga berjanji bahwa Anda tidak akan menyebabkan ketidaknyamanan kepada orang lain atau melakukan pemesanan palsu melalui Platform.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    h. Dengan memberikan informasi kepada kami, Anda menyatakan bahwa Anda berhak untuk memberikan kepada kami informasi yang akan digunakan oleh Kami dan Penyedia Layanan.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    i. Anda mengetahui dan setuju bahwa setiap informasi dalam bentuk apapun, termasuk namun tidak terbatas pada video, audio, gambar atau tulisan yang ada dalam Platform memiliki hak atas kekayaan intelektual (termasuk namun tidak terbatas kepada hak atas merek dan hak cipta) masing-masing. Anda tidak diperbolehkan untuk menggunakan, mengubah, memfasilitasi, menyebarluaskan dan/atau memutilasi hak atas kekayaan intelektual tersebut tanpa izin dari pemilik hak atas kekayaan intelektual tersebut sebagaimana diatur dalam peraturan perundang-undangan yang berlaku.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    j. Pada saat mengakses dan menggunakan Platform termasuk setiap fitur dan layanannya, Anda tidak diperkenankan untuk:
                    <br />i. mengalihkan akun Anda di Platform kepada pihak lain tanpa persetujuan terlebih dahulu dari Kami.
                    <br />ii. menyebarkan virus, spam atau teknologi sejenis lainnya yang dapat merusak dan/atau merugikan Platform dan pengguna Platform lainnya.
                    <br />iii. memasukkan atau memindahkan fitur pada Platform tanpa persetujuan dari Kami.
                    <br />iv. menempatkan informasi atau aplikasi lain yang melanggar hak kekayaan intelektual pihak lain di dalam Platform.
                    <br />v. mengambil atau mengumpulkan data pribadi dari pengguna Platform lain, termasuk tetapi tidak terbatas pada alamat surel, tanpa persetujuan dari pengguna tersebut.
                    <br />vi. menggunakan Platform untuk untuk hal-hal yang dilarang berdasarkan hukum dan undang-undang yang berlaku.
                    <br />vii. menggunakan Platform untuk mendistribusikan iklan atau materi lainnya.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    k. Anda mengetahui dan menyetujui bahwa tarif Layanan yang tercantum pada Platform dapat sewaktu-waktu mengalami perubahan.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    l. Anda memahami bahwa seluruh artikel mengenai kesehatan dan nutrisi yang Kami tampilkan hanya bersifat umum dan digunakan semata – mata untuk mengedukasi konsumen. Bagian mana pun dari artikel yang Kami tampilkan tidak dapat dianggap dan tidak dapat digunakan sebagai pengganti dari saran, diagnosis, atau perawatan medis. Walau berbagai upaya telah dilakukan untuk menampilkan data dan/atau informasi seakurat mungkin, Kami tidak bertanggung jawab atas segala kesalahan dan keterlambatan memperbarui data atau informasi, atau segala kerugian yang timbul karena tindakan yang berkaitan dengan penggunaan artikel, data/informasi dan waktu penyajian yang disajikan dalam Platform.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3">
                    m. Platform memiliki tautan-tautan dengan situs-situs yang dioperasikan dengan pihak ketiga. Tautan-tautan ini tersedia untuk kenyamanan anda dan hanya akan digunakan untuk menyediakan akses ke situs pihak ketiga dan bukan untuk tujuan lainnya. Kami tidak menjamin kualitas, isi atau informasi dari Produk atau layanyan yang disediaka oleh situs yang dioperasikan oleh pihak ketiga.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Layanan"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    a. Fitur Puskesmas
                    <br />i. Fitur ini dapat membantu untuk mencari puskesmas sesuai dengan kebutuhan Anda.
                    <br />ii. Fitur ini dapat membantu anda berkomunikasi dengan puskesmas melalui Whatsapp.
                    <br />iii. Informasi mengenai puskesmas dan Tenaga Medis yang berkerja di puskemsas tersebut Kami kumpulkan dari Dinas Kesehatan Provinsi DKI Jakarta ("Pemerintah”). Kami tidak menjamin akurasi dari informasi mengenai puskesmas dan Tenaga Medis yang bekerja di pueskesmas tersebut yang terdapat dalam Platform Kami.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    b. Fitur Pemeriksaan Mandiri
                    <br />i. Fitur ini memfasilitasi pemeriksaan mandiri COVID-19 dan Penyakit Kronis bagi Anda yang berhalangan untuk datang langsung ke fasilitas kesehatan.
                    <br />ii. Anda akan Kami minta manjawab pertanyaan sesuai dengan Pedoman Pencegahan dan Pengendalian Covid-19 Revisi ke 5 dari Kementrian Kesehatan Republik Indonesia.
                    <br />iii. Anda tidak dapat mengubah hasil pemeriksaan tersebut hingga di periksa oleh Tenaga Medis dan petugas kesehatan di puskesmas yang bekerja sama dengan Alinamed.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    C. Fitur Pelaporan Harian Mandiri
                    <br />i. Fitur Pelaporan Harian Mandiri memudahkan Anda Sebagai Anda / Penerima Layanan Pelaporan Harian Mandiri untuk Memberikan Laporan Kondisi Kesehatan setiap hari selama proses Isolasi Mandiri yang anda jalani di tempat yang telah di tentukan oleh puskesmas setempat, memberikan hasil pemeriksaan Laboratorium dan menginformasikan puskesmas wilayah tempat Anda melakukan proses Isolasi Mandiri kepada Pemerintah.
                    <br />ii. Melalui fitur aplikasi Pelaporan Harian Mandiri Berdasarkan Laporan Kesehatan Anda dan hasil pemeriksaan Laboratorium, Pemerintah dapat memberikan Kriteria Kasus dan Status terbaru setiap Anda Pelaporan Harian Mandiri
                    <br />iii. Fitur Pelaporan Harian Mandiri memudahkan Pemerintah dalam hal ini sebagai Pemantau / Penyedia Layanan Pelaporan Harian Mandiri untuk menerima laporan kondisi Kesehatan setiap Anda Pelaporan Harian Mandiri yang di pantau secara langsung dan dalam kondisi tertentu terkait Kesehatan Anda dapat segera mengambil Tindakan yang di perlukan.
                    <br />iv. Fitur Pelaporan Harian Mandiri memudahkan Pemerintah dalam hal ini sebagai pemantau / Penyedia Layanan Pelaporan Harian Mandiri dengan tujuan menekan jumlah penyebaran Virus Covid – 19 dapat memantau pergerakkan Anda / penerima Layanan selama menjalani proses Pelaporan Harian Mandiri.
                    <br />v. Layanan ini adalah layanan sosial dan tidak dibebankan biaya apapun, Kami berkontribusi dalam pencegahan penyebaran COVID-19 dengan membantu pelacakan kondisi harian Anda pada saat melaksanakan Pelaporan Harian Mandiri. Layanan Gratis ini bekerjasama dengan Pemerintah untuk tujuan sosial Dengan menggunakan layanan Pelaporan Harian Mandiri ini Anda dengan ini menyatakan telah mengerti dan memahami syarat dan ketentuan yang berlaku.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Biaya & Pembayaran"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    a. Pengunduhan perangkat lunak dan penggunaan Aplikasi Alinamed adalah bebas biaya. Namun, Kami dapat mengenakan biaya untuk penggunaan fitur tertentu pada Aplikasi Alinamed di kemudian hari.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    b. Untuk Jenis Fitur Puskesmas, Fitur Pemeriksaan Mandiri, Fitur Pelaporan Harian Mandiri adalah jenis Fitur bebas biaya, yang dapat langsung Anda pergunakan sesuai prosedur yang sudah diatur, sebagai bentuk partisipasi Kami sebagai penyedia Platform membantu Pemerintah menanggulangi dan menekan penyebaran virus Covid – 19.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    c. Kami dapat mengenakan biaya untuk penggunaan fitur/Jenis Layanan tertentu pada Platform termasuk pengembangannya di kemudian hari.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Transaksi Anda"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    a. Untuk dapat bertransaksi di Platform, Anda dapat menggunakan berbagai metode pembayaran yang tersedia pada Platform termasuk namun tidak terbatas pada GOPAY, KARTU DEBIT dan KARTU KREDIT.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    b. Transaksi Anda tidak dapat dipindahtangankan atau diuangkan dalam bentuk apapun.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    c. Apabila Anda mencurigai adanya aktivitas yang tidak wajar dan/atau terjadi perselisihan/sengketa sehubungan dengan akun Anda, Anda dapat segera menghubungi Kami agar Kami dapat segera mengambil tindakan yang diperlukan.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    d. Apabila Kami harus mengembalikan uang Anda yang terpotong karena kesalahan yang berasal dari Kami, Kami hanya akan mengembalikan dalam bentuk kupon promo ke dalam akun Anda.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    e. Kami juga dapat melakukan penangguhan segala transaksi yang berasal dari akun Anda serta dapat melakukan tindakan penangguhan transaksi apabila kami mengindentifikasi adanya masalah pada akun Anda atau suatu transaksi tertentu.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    f. Anda memahami dan menyetujui bahwa batas waktu pengajuan keluhan mengenai transaksi adalah maksimal 7 (tujuh) hari kalender setelah transaksi selesai.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    g. Anda memahami dan menyetujui bahwa keluhan yang disampaikan lebih dari 7 (tujuh) hari kalender setelah transaksi selesai bukan merupakan tanggung jawab Kami.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Pembatasan & Tanggung Jawab"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    a. Kami tidak bertanggung jawab atas cidera, kematian, kerusakan atau kerugian langsung maupun tidak langsung, materiil maupun immateriil yang disebabkan oleh interaksi antara para Penyedia Layanan dengan Anda melalui Platform. Kami juga tidak bertanggung jawab atas kesalahan atau tindakan apapun yang dilakukan oleh para Penyedia Layanan selama pelaksanaan Layanan. Penyedia Layanan hanya merupakan mitra kerja Kami, bukan pegawai, agen atau perwakilan Kami.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    b. Ketepatan serta keakuratan Petugas kesehatan Puskesmas dalam memberikan informasi Kesehatan kepada akan bergantung pada informasi yang diberikan oleh Anda. Kami tidak bertanggung jawab atas setiap isi dan/atau pernyataan-pernyataan dalam percakapan yang dilakukan oleh Anda dengan Tenaga Medis menggunakan Whatsapp maupun arsip Puskesmas seperti Doctor Notes (Catatan Tenaga Medis), pada Platform, hal tersebut ialah percakapan dan interaksi pribadi antara Anda dengan Tenaga Medis dan jelas di luar kendali Kami, maka apabila di kemudian hari muncul permasalahan hukum mengenai isi dan/atau pernyataan-pernyataan dari percakapan dan interaksi antara Anda dengan Tenaga Medis dalam fitur puskesmas, fitur pemeriksaan mandiri, fitur pelaporan harian tersebut, sepenuhnya menjadi tanggung jawab Anda dan Anda membebaskan Kami dari segala tuntutan, dakwaan dan akibat hukum yang ada.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    c. Dengan menggunakan fitur Puskesmas, Anda memahami bahwa Anda memiliki hak sepenuhnya untuk memilih puskesmas yang sesuai dengan kebutuhan dan preferensi Anda.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="HAKI"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    a. Kami adalah pemilik tunggal atas nama, ikon, dan logo Alinamed serta fitur Bicara dengan Tenaga Medis dalam Aplikasi, yang mana merupakan hak cipta dan merek dagang yang dilindungi undang-undang Republik Indonesia. Dilarang keras menggunakan, memodifikasi, atau memasang nama, ikon, logo, atau merek tersebut tanpa persetujuan tertulis dari Kami.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    b. ALINAMED adalah pemilik tunggal atas nama, ikon, dan logo “Alinamed.com”, “Alinamed”, serta pemegang hak kekayaan intelektual yang sah atas nama, ikon dan logo “Alinamed.com”, “Alinamed”, yang merupakan hak cipta dan merek yang dilindungi undang-undang. Dilarang keras menggunakan, mengubah, atau memasang nama, ikon, logo, atau merek tersebut tanpa persetujuan tertulis dari ALINAMED.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    c. Seluruh hak atas kekayaan intelektual yang terdapat dalam Platform berdasarkan hukum negara Republik Indonesia, termasuk dalam hal ini adalah kepemilikan hak kekayaan intelektual atas seluruh source code Platform dan hak kekayaan intelektual terkait Platform. Untuk itu, Anda dilarang untuk melakukan pelanggaran atas hak kekayaan intelektual yang terdapat pada Platform ini, termasuk melakukan modifikasi, karya turunan, mengadaptasi, menduplikasi, menyalin, menjual, membuat ulang, meretas, menjual, dan/atau mengeksploitasi Platform termasuk penggunaan Platform atas akses yang tidak sah, meluncurkan program otomatis atau script, atau segala program apapun yang mungkin menghambat operasi dan/atau kinerja Platform, atau dengan cara apapun memperbanyak atau menghindari struktur navigasi atau presentasi dari Platform atau isinya.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    d. Anda hanya diperbolehkan untuk menggunakan Platform semata-mata untuk kebutuhan pribadi, non-komersial, non-eksklusif, tidak dapat dipindahtangankan, tidak dapat dialihkan dan tidak dapat disublisensikan.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3">
                    e. Kami memiliki hak sepenuhnya untuk melakukan tindakan hukum terhadap setiap pelanggaran yang dilakukan oleh Anda terkait dengan hak kekayaan intelektual terkait Platform.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Sosialisasi"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    Platform dapat memuat sosialisasi mengenai produk dan/atau layanan yang berkaitan Covid-19 yang disediakan oleh pihak ketiga (“Sosialisasi”). Seluruh informasi mengenai Sosialisasi disediakan oleh Sosialisasi. Kami tidak memberikan dukungan (endorsement) atas Sosialisasi mana pun terkait Covid-19. Kami tidak melakukan proses komersialisasi atas Sosialisasi mana pun terkait Covid-19. Kami tidak bertanggung jawab atas Sosialisasi mau pun setiap informasi yang terdapat dalam Sosialisasi tersebut. Komunikasi atau transaksi Anda dengan pihak ketiga penyedia Sosialisasi dan setiap syarat, ketentuan, jaminan atau pernyataan yang terkait dengan transaksi tersebut semata – mata merupakan hubungan antara Anda dengan penyedia Sosialisasi tersebut.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Pemberitahuan"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    a. Semua pemberitahuan atau permintaan informasi kepada atau tentang Kami akan diproses jika dibuat secara tertulis dan dikirimkan ke alamat kami di: Jl Dharmawangsa No. 33B, Kel. Airlangga, Kec. Gubeng, Kota Surabaya, Prov. Jawa Timur atau alamat surat elektronik Kami di:alinamed.id@gmail.com atau call center kami di 089678645902 atau 031-9944-6670.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    b. Semua pemberitahuan dan/atau permintaan kepada atau tentang Anda akan diproses bila diserahkan langsung, dikirimkan melalui kurir, surat tercatat, atau alamat e-mail yang diberikan oleh Anda kepada Kami atau dengan cara memasang pemberitahuan atau permintaan tersebut di Platform yang dapat diakses oleh umum tanpa dikenakan biaya. Pemberitahuan kepada Anda akan dianggap sudah diterima oleh Anda tersebut jika dan bila:
                    <br />i. Kami dapat menunjukkan bahwa pemberitahuan tersebut, baik dalam bentuk fisik maupun elektronik, telah dikirimkan kepada Anda tersebut; atau
                    <br />ii. Kami telah memasang pemberitahuan tersebut di Platform yang dapat diakses oleh umum tanpa dikenakan biaya.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Keamanan Platform"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    Kami senantiasa melakukan upaya yang wajar untuk menjaga Platform ini berfungsi dan berjalan lancar. Bagaimana pun juga, kami tidak bertanggung jawab dan tidak akan bertanggung jawab atas ketidaktersediaan Platform dan/atau fitur Layanan yang disebabkan oleh berbagai alasan, termasuk namun tidak terbatas pada keperluan pemeliharaan atau masalah teknis. Namun demikian, Anda mengetahui dan setuju bahwa transmisi atau akses internet tidak selamanya menciptakan suatu transaksi pembayaran yang aman dan pribadi, dan karenanya setiap pesan atau informasi yang Anda kirimkan atau gunakan dalam Platform mungkin dapat dibajak atau diambil oleh pihak ketiga yang tidak bertanggung jawab.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Tidak Ada Jaminan"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    Platform ini disediakan “sebagaimana adanya” dalam arti Anda mengakui dan menyetujui bahwa seluruh risiko yang ditimbulkan dari penggunaan Platform oleh Anda tetap sepenuhnya ada pada Anda dan Anda tidak memiliki hak untuk meminta ganti rugi apapun dari Kami. Kami TIDAK memberikan pernyataan ataupun jaminan terkait dengan:
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    a. bahwa Platform ini akan bebas dari kesalahan dan/atau kecacatan maupun saat beroperasi dengan kombinasi dengan perangkat keras, perangkat lunak, sistem atau data lainnya serta bahwa kesalahan dan/atau kecacatan dalam Platform akan diperbaiki.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    b. ketersediaan dan kehandalan Platform maupun server-server pendukung yang menyediakan Platform, termasuk terbebas dari virus dan komponen berbahaya lain.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    c. keamanan, ketepatan waktu, kualitas, kesesuaian, ketersediaan, akurasi dan kelengkapan dari Platform.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    d. bahwa Platform akan sesuai dengan harapan dan kebutuhan Anda.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    e. bahwa kualitas produk, fitur dan informasi yang tersedia akan memenuhi harapan dan kebutuhan Anda.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Kebijakan Privasi"
                    desc={`<p class="text-justify tracking-tight">
                    Kebijakan privasi ini (“Kebijakan Privasi”) akan menjelaskan bagaimana PT Alina Medika Indonesia dan setiap anak perusahaan serta perusahaan afiliasinya (“Kami”), memperoleh, mengumpulkan, menggunakan, menampilkan, mengumumkan, mengungkapkan, memproses, membukakan akses, menyimpan, mengirim, memberi, mengalihkan, mengolah, mengelola, memusnahkan dan melindungi informasi dan data pribadi (secara bersama-sama, “Pemanfaatan”) yang anda sebagai pengguna (“Anda”) Platform (sebagaimana didefinisikan di bawah) berikan sebagaimana diminta maupun pada saat menggunakan Platform (“Data Pribadi”). Perlu dicatat bahwa Data Pribadi di sini tidak termasuk Data Pribadi yang telah tersedia di domain publik.
                    </p>

                    <p class="text-justify tracking-tight mt-3">
                    Kebijakan Privasi ini merupakan bagian dari Syarat dan Ketentuan Penggunaan (“Ketentuan Penggunaan”) Kami. Penggunaan Platform dan setiap fitur dan/atau layanan yang tersedia dalam Platform merupakan bentuk persetujuan Anda terhadap Ketentuan Penggunaan dan Kebijakan Privasi tersebut. Oleh karena itu, Anda perlu untuk membaca Kebijakan Privasi ini dengan seksama untuk memastikan bahwa Anda memahaminya sepenuhnya sebelum mendaftar, mengakses dan/atau menggunakan Platform dan Layanan Kami.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    A. Lingkup Kebijakan Privasi
                    <br />1. Kebijakan Privasi ini mengatur Pemanfaatan Data Pribadi.
                    <br />2. Dengan menggunakan Platform, maka Anda dianggap telah membaca Kebijakan Privasi ini dan menyetujui mekanisme Pemanfaatan Data Pribadi Anda sebagaimana diatur dalam Kebijakan Privasi ini.
                    <br />3. Apabila Kami meminta Anda untuk memberikan informasi ketika menggunakan Platform, maka informasi tersebut itu hanya akan digunakan untuk keperluan pemberian Layanan sesuai dengan Kebijakan Privasi ini.
                    <br />4. Kami berhak untuk sewaktu-waktu mengubah, menghapus dan untuk menerapkan ketentuan baru Kebijakan Privasi ini. Anda diharapkan untuk memeriksa halaman Kebijakan Privasi ini secara berkala untuk mengetahui perubahan tersebut. Dengan menggunakan Platform setelah terjadinya perubahan tersebut, Anda dianggap telah mengetahui dan menyetujui perubahan-perubahan ketentuan pada Kebijakan Privasi ini.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    B. Registrasi
                    <br />1. Anda diharuskan melakukan pendaftaran dalam Platform untuk dapat menggunakan fitur – fitur pada Platform.
                    <br />2. Informasi mengenai identitas diri yang wajib diisi oleh Anda saat membuat akun di Platform antara lain adalah:
                        <br />i. Nama lengkap sesuai kartu identitas yang berlaku (KTP atau Paspor);
                        <br />ii. Tanggal lahir;
                        <br />iii. Jenis kelamin; dan
                        <br />iv. Nomor telepon genggam.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    C. Cara Mengumpulkan Data Pribadi
                    <br />1. Kami mengumpulkan informasi yang Anda berikan saat Anda membuat akun dan profil, mengirimkan surat elektronik / surel / e-mail kepada Kami atau meletakkan informasi atau konten lain di Platform, maupun pada saat menggunakan fitur-fitur yang terdapat dalam Platform.
                    <br />2. Anda mengetahui dan menyetujui bahwa informasi yang kami kumpulkan ketika Anda membuat akun dan profil, mengirimkan surat elektronik / surel / e-mail kepada Kami atau meletakkan informasi atau konten lain di Platform, termasuk tetapi tidak terbatas pada: nama lengkap, umur, tanggal lahir, jenis kelamin, kewarganegaraan, alamat domisili, nomor RT, nomor RW, kecamatan, kelurahan, agama, status perkawinan, pekerjaan, hasil screening covid-19, nomor tanda pengenal (KTP atau Paspor), foto selfie, lokasi/koordinat GPS (hanya jika Anda mengaktifkan fitur ini), alamat Internet Protocol (IP) (jika menggunakan browser), sistem operasi, jenis browser, alamat Platform yang merujuk dan aktivitas Anda di Platform
                    <br />3. Pengumpulan data nama lengkap, umur, tanggal lahir, jenis kelamin, kewarganegaraan, alamat domisili, nomor RT, nomor RW, kecamatan, kelurahan, agama, status perkawinan, pekerjaan, hasil screening covid-19, nomor tanda pengenal (KTP atau Paspor) merupakan standar pelaporan kasus Covid-19 yang di atur di Pedoman Pencegahan dan Pengendalian Covid-19 Revisi ke 5 dari Kementrian Kesehatan Republik Indonesia. Sedangkan foto selfie, lokasi/koordinat GPS, alamat Internet Protocol (IP), sistem operasi, jenis browser, alamat Platform yang merujuk dan aktivitas Anda di Platform, merupakan kebutuhan yang akan di gunakan oleh Pemerintah untuk memantau aktivitas anda selama melakukan isolasi mandiri di lokasi yang di tentukan oleh Pemerintah
                    <br />4. Kami akan meminta ijin kepada Anda terlebih dahulu melalui Platform untuk mengakses dan menbaca file, mengakses lokasi, mengakses kamera, mengakses kontak, Internet dan Anda memiliki kuasa penuh untuk mengaktifkan atau menonaktifkan layanan tersebut di awal saat Anda mulai menggunakan Platform maupun saat anda menggunakan Platform.
                    <br />5. Anda mengetahui dan menyetujui bahwa Kami berhak untuk melakukan verifikasi langsung kepada Anda atau pihak lainnya atas informasi mengenai data diri yang telah disampaikan Anda melalui Platform.
                    6. Dengan menggunakan Platform, Anda menjamin bahwa informasi yang Anda berikan adalah akurat dan benar.
                    <br />7. Apabila informasi yang Anda berikan tersebut ternyata tidak benar, maka Kami tidak bertanggung jawab atas segala akibat yang dapat terjadi sehubungan dengan pemberian dan penggunaan informasi tidak benar tersebut.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    D. Data Pengunjung
                    Anda mengetahui dan menyetujui bahwa Platform akan mengumpulkan informasi tentang penggunaan, seperti (namun tidak terbatas pada) jumlah kunjungan, sumber pengunjung dan aktivitas pengunjung. Data ini Kami kumpulkan dan Kami gunakan dengan tujuan meningkatkan kepuasan Anda serta pelayanan Kami.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    E. Penggunaan Data Pribadi
                    <br />1. Kami menggunakan informasi Data Pribadi untuk:
                    <br />i. Menyediakan informasi kepada Anda dan Penyedia Layanan sesuai permintaan Anda berkaitan dengan Layanan Kami. Kami dapat membagi informasi kesehatan Anda dengan dokter lain atau penyedia kesehatan lain yang akan menyediakan Layanan untuk Anda melalui Kami.
                    <br />ii. Menyediakan pembuatan resep dan/atau obat-obatan sesuai permintaan Anda berkaitan dengan pelayanan Kami pada fitur Beli Obat. Kami dapat membagi informasi tersebut dengan apotek atau pihak lain yang akan menyediakan pelayanan untuk Anda melalui Kami.
                    <br />iii. Menggunakan dan mengungkapkan informasi kesehatan Anda dan resep sesuai keperluan operasi Platform. Kami dapat menggunakan dan mensirkulasikan informasi ini untuk tujuan peninjauan dan peningkatan kualitas pelayanan yang Kami sediakan, atau kompetensi dan kualifikasi staf profesional Platform.
                    <br />iv. Menanggapi pertanyaan, komentar dan umpan balik anda.
                    <br />v. Memproses partisipasi Anda dalam setiap kegiatan kontes, permainan, promosi, jajak pendapat maupun survei.
                    <br />vi. Memahami dan menganalisa pola penggunaan dan penjualan produk dan layanan terkait kebutuhan dan preferensi.
                    <br />vii. Mengembangkan, meningkatkan dan menyediakan produk dan layanan yang sesuai dengan kebutuhan anda.
                    <br />viii. Memberikan informasi/mengirimkan e-mail dan/atau SMS berisi promosi secara berkala kepada Anda bila terdapat suatu penawaran dan/atau promosi atas produk-produk baru, penawaran khusus, atau informasi lain yang menurut Kami diperlukan oleh Anda.
                    <br />ix. Menginformasikan kepada Anda mengenai setiap perubahan dari Platform, pelayanan dan produk Kami.
                    <br />x. Menggunakan informasi tersebut untuk menghubungi Anda.
                    <br />xi. Menggunakan dan mengungkapkan informasi ini jika diperlukan bagi tinjauan medis, jasa hukum, dan audit, meliputi penipuan dan deteksi penyalahgunaan dan program penyesuaian, serta perencanaan dan manajemen bisnis.
                    <br />xii. Catatan atau dokumentasi internal Kami yang disimpan di server Kami, baik di dalam maupun di luar wilayah Indonesia.
                    <br />xiii. Memberikan Data Pribadi Anda kepada PT AMI, ALINAMED, dan Penyedia Layanan untuk pemberian Layanan berdasarkan Platform.
                    <br />xiv. Keperluan lainnya selama dilakukan sesuai dengan peraturan perundang-undangan yang berlaku.
                    <br />2. Kami menjamin bahwa data dan informasi yang diberikan Anda bersifat rahasia dan tidak akan disebarluaskan kecuali untuk hal-hal yang telah dicantumkan dan Anda setujui dalam Kebijakan Privasi ini. Untuk mencegah akses tidak sah, Kami melakukan tindakan pengamanan fisik, elektronik, dan prosedur manajerial untuk melindungi informasi Anda.
                    <br />3. Informasi kesehatan Anda hanya akan digunakan sehubungan dengan pelayanan Platform dan hal-hal yang telah dicantumkan dan Anda setujui dalam Kebijakan Privasi ini dan Kami hanya akan mengumpulkan informasi yang dibutuhkan untuk menjalankan pelayanan dalam Platform.
                    <br />4. Kami menyimpan informasi pribadi Anda selama informasi tersebut berhubungan dengan tujuan-tujuan yang dibutuhkan untuk kepentingan pelayanan Kami kepada Anda. Kerahasiaan informasi pribadi Anda tentunya dianggap rahasia dan tidak akan disebarluaskan kecuali apabila telah disetujui oleh Anda berdasarkan Kebijakan Privasi ini atau diwajibkan oleh peraturan perundang-undangan yang berlaku.
                    <br />5. Dengan menggunakan Platform, Anda dianggap telah menyetujui untuk mengizinkan pihak ketiga tertentu untuk menggunakan Data Pribadi Anda untuk memberikan Anda informasi mengenai barang dan jasa yang Anda perlukan. Pihak ketiga tersebut termasuk tetapi tidak terbatas pada:
                    <br />i. Asuransi Anda yang akan membutuhkan bukti pelayanan yang telah diberikan dan/atau sebuah laporan medis sebelum dilakukan pembayaran kepada Platform atau jika mereka memerlukan untuk otorisasi layanan atau rujukan.
                    <br />ii. Penyedia layanan pihak ketiga yang telah memberikan layanan kepada Anda atau dokter Anda (contoh layanan x-ray atau jasa uji laboratorium) untuk mendapatkan hasil pemeriksaan atau untuk kepentingan penerbitan invoice.
                    <br />iii. Rekan bisnis Kami, seperti rekan apotek, jasa penagihan, atau yang mengerjakan layanan jasa administrasi untuk Kami. Kami memiliki perjanjian kerjasama dengan masing-masing rekan bisnis dan penyedia jasa diwajibkan untuk melindungi kerahasiaan dan keamanan dari informasi yang diteruskan pada mereka.
                    <br />iv. Perusahaan penyedia jasa pemrosesan transaksi pembayaran yang meliputi penyelenggara payment gateway, transfer dana, dompet elektronik, dan penyelenggara jasa sistem pembayaran lainnya terkait transaksi yang dilakukan dalam Platform.
                    <br />v. Perusahaan penyedia layanan lain maupun mitra Kami yang terkait dengan fitur, produk dan layanan yang ditawarkan dalam Platform.
                    <br />vi. Otoritas pemerintah, baik di dalam maupun di luar yurisdiksi negara Republik Indonesia sesuai peraturan perundang-undangan yang berlaku.
                    <br />vii. Pihak-pihak lainnya selama dilakukan sesuai dengan peraturan perundang-undangan yang berlaku.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    F. Koneksi Anda Ke Platform Lain
                    Platform dapat memuat tautan menuju platform milik pihak ketiga (“Platform Pihak Ketiga”) dan konten pihak ketiga (“Konten Pihak Ketiga”). Penggunaan Anda atas tautan menuju Platform Pihak Ketiga dan/atau Konten Pihak Ketiga tersebut didasarkan atas kebijaksanaan Anda sendiri. Ketika Anda menggunakan tautan menuju Platform Pihak Ketiga dan/atau Konten Pihak Ketiga, Kami tidak bertanggung jawab untuk melindungi privasi dan informasi apapun yang Anda berikan ketika mengunjungi Platform Pihak Ketiga dan/atau Konten Pihak Ketiga tersebut. Kami juga tidak bertanggung jawab atas setiap informasi yang terdapat pada Platform Pihak Ketiga dan/atau Konten Pihak Ketiga, termasuk dampak yang ditimbulkan akibat mengakses Platform Pihak Ketiga dan/atau Konten Pihak Ketiga. Anda harus mempelajari dan membaca dengan hati-hati kebijakan penanganan informasi pribadi yang berlaku di Platform Pihak Ketiga dan/atau Konten Pihak Ketiga.
                    <br />Kami menyediakan tautan menuju Platform Pihak Ketiga dan/atau Konten Pihak Ketiga hanya untuk kenyamanan Anda semata dan hal tersebut tidak dapat ditafsirkan sebagai dukungan, adopsi, sponsor, afiliasi antara Kami dengan Platform Pihak Ketiga dan/atau Konten Pihak Ketiga.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    G. Hukum Yang Berlaku
                    Kebijakan Privasi ini diatur berdasarkan hukum Republik Indonesia dan Anda diwajibkan tunduk kepada semua peraturan yang berlaku di Indonesia.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    H. Upaya Pengamanan
                    <br />1. Kami berkomitmen untuk memastikan bahwa informasi yang Anda berikan kepada Kami aman dan tidak dapat digunakan oleh pihak-pihak yang tidak bertanggungjawab. Dengan menggunakan Platform, Anda mengizinkan Kami untuk melakukan segala tindakan yang Kami anggap perlu untuk melindungi informasi Anda yang Kami kumpulkan secara online untuk mencegah akses tidak sah. Namun demikian, mohon diperhatikan bahwa Kami tidak dapat menjamin sepenuhnya keamanan tersebut dan tidak bertanggung jawab atas setiap kerugian, termasuk namun tidak terbatas atas kehilangan data yang terjadi dari insiden di luar kendali Kami. Oleh karena itu, Kami sangat menyarankan agar Anda selalu memperbarui Platform dan perangkat lunak anda serta tidak mengungkapkan kata sandi anda kepada pihak manapun.
                    <br />2. Anda dengan ini memberikan persetujuan secara tegas kepada Kami bahwa Kami dapat mengirimkan, menyimpan, menggunakan dan mengolah Data Pribadi pada server yang terletak di pusat data yang ditunjuk oleh Kami. Pusat data tersebut dapat dikelola oleh pihak ketiga. Meskipun demikian, Pemanfaatan informasi dan Data Pribadi sehubungan dengan penggunaan Platform akan terus diatur oleh Kebijakan Privasi ini sesuai dengan peraturan perundangan-undangan yang berlaku. Kami akan menyimpan informasi dan Data Pribadi Anda sekurang-kurangnya hingga ada permintaan khusus untuk menghapus akun anda atau sampai dengan berakhirnya jangka waktu yang ditentukan di dalam peraturan perundang-undangan yang berlaku.                    
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    I. Pertanyaan, keluhan dan kontak
                    Jika Anda memiliki pertanyaan tentang kebijakan kerahasiaan ini, peraturan-peraturan Kami, hak Anda, dan hubungan Anda dengan Platform, silakan mengirim surat elektronik Kami di: alinamed.id@gmail.com atau call center kami di 089678645902 atau 031-9944-6670.
                    </p>`}
                    show={false}
                />
                <AccordionItem
                    title="Penutup"
                    desc={`<p class="text-justify no-indent  tracking-tight">
                    a. Hubungan Kami dengan Anda merupakan suatu hubungan independen dan di antara kita tidak ada hubungan keagenan, kemitraan, usaha patungan, karyawan-perusahaan atau pemilik waralaba-pewaralaba yang akan timbul dengan adanya Ketentuan Penggunaan ini.
                    </p>

                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    b. Judul di dalam Ketentuan Penggunaan ini dibuat hanya sebagai acuan, dan sama sekali tidak menetapkan, membatasi, menjelaskan atau menjabarkan apa yang termaktub dalam pasal tersebut.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    c. Kami memiliki hak untuk menginvestigasi dan menuntut hak Kami untuk setiap pelanggaran atas Ketentuan Penggunaan ini sepanjang yang dimungkinkan dan diperkenankan oleh hukum. Anda dengan ini mengakui bahwa Kami memiliki hak untuk memonitor akses penggunaan Platform untuk memastikan kepatuhan dengan Ketentuan Penggunaan ini, atau untuk mematuhi peraturan yang berlaku atau perintah atau persyaratan dari pengadilan, lembaga administratif atau badan pemerintahan lainnya.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    d. Pengguna tidak diperbolehkan untuk melakukan pencucian uang dan/atau menggunakan uang yang berasal dari sumber yang tidak sah secara hukum. Kami berhak untuk melaporkan transaksi yang dicurigai sebagai tindak pidana pencucian uang kepada pihak yang berwajib.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    e. Kami berhak, tanpa pemberitahuan sebelumnya, melakukan tindakan-tindakan yang diperlukan apabila ditemukan tindakan manipulasi/kecurangan, seperti menutup atau membatalkan akun, menarik subsidi, menarik cashback, membatalkan transaksi, menahan dana, serta hal-hal lainnya jika ditemukan indikasi kecurangan, pencucian uang atau pelanggaran yang dilakukan oleh Anda atas Ketentuan Penggunaan ini dan ketentuan hukum yang berlaku di wilayah negara Indonesia.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    f. Ketentuan Penggunaan ini diatur dan ditafsirkan serta dilaksanakan berdasarkan hukum yang berlaku di Negara Republik Indonesia dan Anda dengan tegas menyetujui bahwa bahwa ketentuan Pasal 1266 Kitab Undang-Undang Hukum Perdata dan ketentuan lainnya yang mewajibkan adanya pengesahan atau persetujuan pengadilan untuk dapat mengakhiri Ketentuan Penggunaan tidak berlaku terhadap Ketentuan Penggunaan ini.
                    </p>
                    
                    <p class="text-justify no-indent  tracking-tight mt-3"">
                    g. Segala sengketa yang berkaitan dengan Ketentuan Penggunaan ini, diselesaikan secara musyawarah untuk mufakat atau melalui Badan Arbitrase Nasional Indonesia (BANI), sesuai dengan prosedur yang berlaku di BANI. Apabila kedua belah pihak tidak sepakat untuk menyelesaikannya sengketa di BANI, maka sengketa akan diselesaikan melalui Pengadilan Negeri Jakarta Selatan
                    </p>`}
                    show={false}
                />
            </div>
            <CopyrightText />
        </>
    );
};

export default SKPengguna;
