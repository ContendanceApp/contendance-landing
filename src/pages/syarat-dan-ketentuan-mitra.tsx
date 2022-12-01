import React from "react";
import SimpledHero from "../components/SimpledHero";
import Head from "next/head";
import AccordionItem from "../components/AccordionItem";
import AccordionParent from "../components/AccordionParent";
import CopyrightText from "../components/CopyrightText";

const SKPengguna = () => {
  return (
    <>
      <Head>
        <title>Syarat & Ketentuan Mitra AlinaMed Indonesia</title>
        <meta name="keywords" content="medika" />
      </Head>
      <SimpledHero
        title="Syarat & Ketentuan Mitra"
        sub="AlinaMed menyediakan dan menjelaskan syarat dan
                        ketentuan untuk mitra"
      />
      {/* Accordion */}
      <div className="container mx-auto my-14 xl:px-12 lg:px-36 md:px-20 sm:px-10 px-8">
        <AccordionItem
          title="PENTING!"
          desc={`<p class="text-justify no-indent tracking-tight">
                        BACALAH PERJANJIAN KERJASAMA KEMITRAAN INI DENGAN SEKSAMA SEBELUM MENDAFTAR SEBAGAI MITRA, MENGAKSES ATAU MENGGUNAKAN APLIKASI ALINAMED
                    </p>`}
          show={true}
        />
        <AccordionItem
          title="Ketentuan Umum"
          desc={`<p class="text-justify no-indent tracking-tight">
                    Persyaratan yang tertera dalam Perjanjian Kerjasama Kemitraan ini (Perjanjian) mengatur hubungan antara anda, perorangan (Mitra), dan Riswanda Noorisa, yang beralamat di Jl. Mojo Klangru Kidul V Blok C Nomer 36, dengan ketentuan-ketentuan sebagai tertera dibawah ini yang dituangkan dalam bentuk Kontrak Elektronik
                    <br />
                    <br />
                    Definisi-definisi sebagaimana disebutkan dibawah ini berlaku dalam Perjanjian ini,
                    </p>
                    
                    <p class="text-justify no-indent tracking-tight mt-3">
                    a. Akun adalah akun yang didapatkan dan atas nama Mitra setelah Mitra mendaftarkan diri melalui Aplikasi ALINAMED;
                    </p>
                    
                    <p class="text-justify no-indent tracking-tight mt-3">
                    b. Aplikasi ALINAMED adalah aplikasi elektronik yang dapat dimanfaatkan setiap orang (konsumen) untuk memperoleh jasa layanan maupun pihak-pihak ketiga yang bekerja sama dengan ALINAMED sebagai wadah untuk menyalurkan jasa kesehatan untuk layanan home care dan/atau orang layanan pesan-antar barang dengan kendaraan bermotor roda dua maupun roda empat atau jasa lainnya yang terkait;
                    </p>

                    <p class="text-justify no-indent tracking-tight mt-3">
                    c. Riswanda Noorisa. Adalah pemilik Aplikasi ALINAMED yang dimanfaatkan konsumen yang telah terdaftar untuk menyalurkan jasa kesehatan untuk layanan home care dan/atau orang layanan pesan-antar barang dengan kendaraan bermotor roda dua maupun roda empat atau jasa lainnya yang terkait sebagaimana dimaksud dalam ayat (1);
                    </p>

                    <p class="text-justify no-indent tracking-tight mt-3">
                    d. Ponsel Pintar adalah telepon selular yang dapat terhubung dengan Aplikasi ALINAMED;
                    </p>

                    <p class="text-justify no-indent tracking-tight mt-3">
                    e. Persyaratan adalah syarat dan ketentuan Perjanjian ini atau syarat dan ketentuan penggunaan Aplikasi ALINAMED maupun fitur fitur didalam Aplikasi ALINAMED;
                    </p>

                    <p class="text-justify no-indent tracking-tight mt-3">
                    f. Kontrak Elektronik adalah perjanjian para pihak yang dibuat melalui sistem elektronik sebagaimana diatur dalam Undang-undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik dan Peraturan Pemerintah No. 82 Tahun 2012 tentang Penyelenggaraan Sistem dan Transaksi Elektronik.
                    </p>`}
          show={false}
        />
        <AccordionItem
          title="Hubungan Kerjasama"
          desc={`<p class="text-justify no-indent tracking-tight">
                    a) Perjanjian kerjasama ini berlaku efektif sejak tanggal disetujuinya kontrak ini oleh Mitra. Dengan ini Mitra memberikan persetujuannya atas syarat dan ketentuan yang tercantum di dalam perjanjian kerjasama ini dengan cara melakukan tindakan mengklik persetujuan secara elektronik atas Perjanjian ini, mengakses dan menggunakan Aplikasi ALINAMED, Mitra akan diartikan telah setuju untuk terikat oleh Persyaratan, yang merupakan sebuah hubungan kontraktual kerja-sama antara Mitra, dan Riswanda Noorisa. Mitra mempunyai kewajiban untuk mentaati setiap kebijakan dalam Persyaratan dalam penggunaan dan pemanfaatan Aplikasi ALINAMED. Dengan memberikan persetujuan atas perjanjian kerjasama ini, Mitra juga memberikan persetujuan atas setiap syarat dan ketentuan yang diberlakukan oleh Riswanda Noorisa, sebagaimana dapat dirubah atau ditambahkan oleh Riswanda Noorisa dari waktu ke waktu, sehubungan dengan penyelengaraan jasa layanan home care maupun layanan pesan-antar barang dengan kendaraan bermotor roda dua maupun roda empat atau jasa lainnya yang terkait, sebagaimana berlaku, sebagaimana diinformasikan atau diumumkan kepada Mitra melalui media elektronik ataupun media komunikasi lain yang dipilih oleh Riswanda Noorisa. Apabila Mitra tidak setuju dengan Persyaratan ini, Mitra dapat memilih untuk tidak mengakses atau menggunakan Aplikasi ALINAMED. Mitra setuju bahwa Riswanda Noorisa dapat secara langsung menghentikan penggunaan Aplikasi ALINAMED oleh Mitra, atau secara umum berhenti menawarkan atau menolak akses Mitra kedalam Aplikasi ALINAMED atau bagian mana pun dari Aplikasi ALINAMED, kapan pun untuk alasan apa pun.
                    </p>
                    
                    <p class="text-justify no-indent tracking-tight mt-3">
                    b) Riswanda Noorisa, sebagai pemilik dari Aplikasi ALINAMED, atas dasar pertimbangannya sendiri, dapat mengubah atau menambahkan Persyaratan dari waktu ke waktu. Perubahan atau penambahan atas Persyaratan tersebut akan berlaku setelah Riswanda Noorisa mengumumkan perubahan atau penambahan Persyaratan tersebut melalui media elektronik ataupun media komunikasi lain yang dipilih oleh Riswanda Noorisa yang dapat mencakup perubahan atau penambahan kebijakan yang sudah ada dalam Persyaratan atau syarat dan ketentuan tambahan. Mitra menyetujui bahwa akses atau penggunaan Mitra yang berkelanjutan atas Aplikasi ALINAMED maupun kelanjutan kerjasama Mitra setelah tanggal pengumuman atas perubahan Persyaratan akan diartikan bahwa Mitra setuju untuk terikat oleh Persyaratan, sebagaimana telah diubah atau ditambahkan.
                    </p>
                    
                    <p class="text-justify no-indent tracking-tight mt-3">
                    c) Riswanda Noorisa dan Mitra merupakan mitra kerjasama dimana masing-masing merupakan subjek hukum yang berdiri sendiri dan independen. Perjanjian kerjasama ini tidak menciptakan hubungan ketenagakerjaan, outsourcing atau keagenan diantara masing-masing Riswanda Noorisa dan Mitra.
                    </p>

                    <p class="text-justify no-indent tracking-tight mt-3">
                    d) Bergantung pada kepatuhan Mitra terhadap Persyaratan, Riswanda Noorisa, melalui hubungan kontraktual kerja-sama ini dan berdasarkan hak yang diberikan kepada dirinya, memberi Mitra lisensi terbatas, non-eksklusif, tidak dapat disublisensikan, tidak dapat dicabut, dan tidak dapat dialihkan untuk: (i) mengakses dan menggunakan Aplikasi ALINAMED pada perangkat Ponsel Pintar yang dimiliki atau dikuasai oleh Mitra semata-mata terkait dengan penggunaan Mitra atas Aplikasi ALINAMED; dan (ii) mengakses dan menggunakan konten/isi, informasi dan materi terkait yang dapat disediakan melalui Aplikasi ALINAMED, dan semata-mata untuk Mitra sebagai penggunaan pribadi. Aplikasi ALINAMED dan semua hak yang terkait dengan Aplikasi ALINAMED merupakan dan akan tetap menjadi milik Riswanda Noorisa. Hak apa pun yang tidak diberikan secara tegas dalam Perjanjian ini merupakan hak Riswanda Noorisa sebagai pemilik dari Aplikasi ALINAMED. Penggunaan Mitra atas Aplikasi ALINAMED maupun pemberian hak oleh Riswanda Noorisa kepada Mitra atas penggunaan Aplikasi ALINAMED, tidak dapat diartikan menyatakan atau memberi Mitra hak kepemilikan apa pun atas Aplikasi ALINAMED.
                    </p>

                    <p class="text-justify no-indent tracking-tight mt-3">
                    e) Untuk dapat disetujui menjadi Mitra, Mitra diwajibkan untuk memenuhi persyaratan yang ditentukan oleh Riswanda Noorisa sebagai berikut:
                    <br/>

                    1. Merupakan dokter yang memiliki SIP dan STR yang masih berlaku selama menjadi mitra

                    <br/>
                    2. Merupakan dokter yang memiliki setidaknya salah satu sertifikat ATLS, ACLS, atau Hiperkes yang masih berlaku selama menjadi mitra

                    <br/>
                    3. Mampu menangani penyakit dengan baik dan benar sesuai kompetnsi yang telah di tentukan di SKDI terbaru

                    <br/>
                    4. Memilki ketrampilan klinik yang baik sesuai dengan panduan ketrampilan klinik IDI dan SOP ALINAMED

                    <br/>
                    5. Mampu mengendarai kendaraan bermotor roda dua dan memiliki Surat Ijin Mengemudi (SIM) yang sesuai dan masih berlaku dan perijinan lainnya yang sah untuk mengemudikan dan memberikan jasa pengangkutan/pengantaran dengan kendaraan roda dua, serta jasa lainnya yang terkait lainnya melalui Aplikasi ALINAMED (sebagaimana ditentukan oleh peraturan perundang-undangan yang berlaku)

                    <br/>
                    6. Memiliki atau menguasai kendaraan bermotor roda dua yang memenuhi persyaratan yang ditentukan berdasarkan hukum yang berlaku serta aman dan nyaman untuk dikendarai di jalan

                    <br/>
                    7. Memiliki rekening pada Bank yang direkomendasikan oleh Riswanda Noorisa

                    <br/>
                    8. Mempunyai catatan prestasi yang baik dan tidak pernah masuk dalam daftar hitam Kepolisian Republik Indonesia

                    <br/>
                    9. Berjanji untuk, pada setiap saat, memenuhi semua syarat dan ketentuan sebagaimana dinyatakan dalam bagian "Kode Etik dan Kewajiban Mitra" dalam Perjanjian ini dan kualifikasi minimum Riswanda Noorisa yang akan dijelaskan secara terpisah namun tetap menjadi kesatuan yang tidak terpisahkan dalam perjanjian ini.
                    </p>

                    <p class="text-justify no-indent tracking-tight mt-3">
                    Mitra menyetujui bahwa Riswanda Noorisa, atas dasar pertimbangannya sendiri, mempunyai hak untuk memberlakukan syarat-syarat tambahan selain yang disebutkan diatas, termasuk namun tidak terbatas kepada meminta Mitra untuk menyerahkan barang atau dokumen tambahan untuk disimpan oleh Riswanda Noorisa (termasuk namun tidak terbatas kepada, kartu keluarga atau barang atau dokumen lain yang ditentukan oleh Riswanda Noorisa) selama Perjanjian ini berlaku ataupun untuk periode lain sebagaimana dapat ditentukan oleh Riswanda Noorisa sendiri, memeriksa keadan fisik maupun surat-surat pendaftaran (Surat Tanda Nomor Kendaraan maupun Bukti Pemilik Kendaraan Bermotor atau dokumen lainnya) atas kendaraan bermotor roda dua yang dimiliki atau dikuasai Mitra, meminta Mitra untuk membayarkan deposit dan menjaga jumlah deposit tersebut dalam rekening Mitra yang terdaftar pada bank yang ditunjuk oleh Riswanda Noorisa atau afiliasi dari Riswanda Noorisa (deposit mana dapat ditarik kembali oleh Mitra apabila Perjanjian ini diakhiri), maupun, apabila diwajibkan oleh peraturan perundang-undangan yang berlaku, meminta Mitra untuk memproses ataupun mendapatkan perizinan lainnya atas nama Mitra pribadi sebagaimana diharuskan berdasarkan peraturan perundang-undangan yang berlaku.
                    </p>`}
          show={false}
        />
        <AccordionParent
          title="Penggunaan Aplikasi AlinaMed"
          item={
            <>
              <AccordionItem
                title="Pendaftaran"
                desc={`<p class="text-justify no-indent tracking-tight">
                                a) Untuk tujuan penggunaan Aplikasi ALINAMED, Mitra harus:

                                <br />a.membaca syarat dan ketentuan kerja-sama dengan Riswanda Noorisa berdasarkan Persyaratan;
                                <br />b.memenuhi syarat-syarat sebagaimana dinyatakan dalam Pasal 2(e) diatas;
                                <br />c.memberikan persetujuannya atas syarat dan ketentuan yang tercantum di dalam Perjanjian ini dengan cara melakukan tindakan mengklik persetujuan secara elektronik atas Perjanjian ini sebagaimana tertera pada akhir dari Perjanjian ini; dan
                                <br />d.mendaftar dan memelihara akun pada Aplikasi ALINAMED sebagai pengguna aktif (“Akun”).
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            b) Untuk tujuan mendaftar dan memelihara Akun, Mitra diwajibkan untuk menyerahkan informasi pribadi tertentu kepada Riswanda Noorisa, termasuk namun tidak terbatas kepada nama, alamat, nomor telepon, dan informasi mengenai rekening Mitra pada Bank yang direkomendasikan oleh Riswanda Noorisa. Mitra menjamin bahwa segala informasi pribadi tertentu yang diberikan kepada Riswanda Noorisa adalah benar dan Mitra bertanggung jawab penuh atas kebenaran informasi tersebut. Mitra bertanggung jawab atas semua kegiatan yang terjadi pada Akun yang dipelihara oleh Mitra. Kecuali diizinkan lain oleh Riswanda Noorisa secara tertulis, Mitra hanya dapat memiliki dan memelihara satu Akun.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            c) Mitra setuju untuk memberikan pemberitahuan kepada Riswanda Noorisa secara tertulis dalam halnya ada perubahan atas data-data Mitra yang telah diberikan kepada Riswanda Noorisa, termasuk namun tidak terbatas kepada nama, alamat, nomor telepon, dan informasi mengenai rekening Mitra pada Bank yang direkomendasikan oleh Riswanda Noorisa.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            d) Mitra menyetujui bahwa Mitra dilarang untuk memberian akses kepada pihak ketiga manapun atas Akunnya, termasuk mengalihkan atau memindahkan Akun dan informasi atas Akun yang dimiliki dan dikelola oleh Mitra kepada pihak ketiga siapa pun. Mitra setuju untuk mematuhi semua hukum yang berlaku maupun Persyaratan saat menggunakan Aplikasi ALINAMED, dan Mitra menyetujui bahwa Mitra akan hanya menggunakan Aplikasi ALINAMED untuk tujuan yang dibenarkan oleh hukum (misalnya, tidak membantu perbuatan atau tindakan apapun yang yang dilarang oleh hukum). Mitra tidak boleh, dalam menggunakan Aplikasi ALINAMED, menimbulkan gangguan, ketidaknyamanan, atau kerusakan properti terhadap pihak lain mana pun. Dalam situasi tertentu yang dapat ditentukan oleh ALINAMED, Mitra dapat diminta untuk menunjukkan bukti identitas diri untuk mengakses atau menggunakan Aplikasi ALINAMED, dan Mitra setuju bahwa Mitra dapat ditolak untuk mengakses atau menggunakan Aplikasi ALINAMED jika Mitra menolak untuk memberikan bukti identitas diri.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            e) Dengan membuat Akun, Mitra setuju bahwa Aplikasi ALINAMED mungkin akan mengirimkan Mitra pesan teks informatif (baik melalui SMS atau aplikasi pengirim pesan) sebagai bagian dari penggunaan Mitra atas Aplikasi ALINAMED.
                            </p>`}
                show={false}
              />
              <AccordionItem
                title="Penggunaan Aplikasi"
                desc={`<p class="text-justify no-indent tracking-tight">
                                a) Penggunaan Aplikasi ALINAMED dilakukan oleh Mitra melalui Ponsel Pintar. Mitra tidak dapat menggunakan Aplikasi ALINAMED melalui sarana elektronik lainnya selain Ponsel Pintar. Mitra dilarang untuk meretas atau melakukan modifikasi Ponsel Pintar atau Aplikasi ALINAMED untuk tujuan lain apapun termasuk menggunakannya untuk segala macam aplikasi dan layanan yang dilarang oleh Riswanda Noorisa.
                            </p>
                    
                            <p class="text-justify no-indent tracking-tight mt-3">
                            b) Pengadaan dan penggunaan Ponsel Pintar adalah tanggung-jawab Mitra sendiri termasuk namun tidak terbatas pada pembelian dari Ponsel Pintar tersebut, pembayaran semua biaya yang dikenakan oleh penyedia layanan telekomunikasi, termasuk namun tidak terbatas pada biaya telepon, SMS, paket data internet.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            c) Apabila Ponsel Pintar yang dimiliki atau dikuasai oleh Mitra hilang, dicuri, rusak dan/atau peristiwa lain yang menyebabkan Ponsel Pintar tidak lagi dalam kuasa Mitra, Mitra akan segera memberitahukan Riswanda Noorisa dan mematuhi prosedur yang telah ditetapkan Riswanda Noorisa. Dalam peristiwa ini, Mitra setuju bahwa Riswanda Noorisa, mempunyai hak untuk menutup akses Mitra pada Akun yang dimilikinya dalam Aplikasi ALINAMED.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            d) Mitra mengerti dan menyetujui bahwa hanya Mitra yang diperbolehkan untuk mengakses Akun yang dimiliki dan didaftarkan atas nama Mitra dalam Aplikasi ALINAMED melalui Ponsel Pintar yang menggunakan nomor telefon yang telah diberikan kepada Riswanda Noorisa pada saat melakukan pendaftaran Akun termasuk untuk melakukan pelayanan kepada Konsumen. Mitra secara tegas dilarang untuk meminjamkan, menyewakan maupun mengalihkan Ponsel Pintar untuk tujuan akses Akun yang dimiliki Mitra dalam Aplikasi ALINAMED termasuk untuk pelayanan kepada Konsumen tanpa persetujuan tertulis terlebih dahulu dari Riswanda Noorisa.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            e) Riswanda Noorisa mempunyai hak untuk menutup ataupun tidak memberikan Mitra akses kepada Akun Mitra dalam Aplikasi ALINAMED apabila Riswanda Noorisa menganggap, dalam diskresi Riswanda Noorisa sendiri tanpa harus dibuktikan kepada pihak ketiga manapun, Mitra melanggar salah satu ketentuan dalam Persyaratan maupun ketentuan lain yang berlaku kepada Mitra dalam kerjasamanya dengan Riswanda Noorisa.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            Dalam hal pelanggaran Persyaratan oleh Mitra, Mitra menyetujui bahwa Riswanda Noorisa mempunyai hak untuk mengambil segala macam tindakan yang dianggap perlu oleh Riswanda Noorisa untuk menyikapi pelanggaran yang dilakukan oleh Mitra atas Persyaratan atau syarat ketentuan lain yang berlaku maupun pelanggaran yang dicurigai oleh Riswanda Noorisa telah dilakukan oleh Mitra (termasuk namun tidak terbatas kepada melakukan penghimpunan fakta terhadap kegiatan Mitra melalui Aplikasi ALINAMED, pemberian surat peringatan, pemutusan akses Mitra atas Aplikasi ALINAMED baik secara permanen maupun sementara, pengakhiran Perjanjian ini maupun memproses tindakan Mitra melalui gugatan perdata maupun pidana, berdasarkan ketentuan perundang-undangan yang berlaku).
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            g) Mitra mengerti dan setuju bahwa sejak tanggal efektif Perjanjian ini, Mitra tidak akan mengambil pesanan ataupun menyediakan jasa antar-jemput barang dan/atau orang atau pesan-antar barang yang dipesan melalui sarana selain Aplikasi ALINAMED termasuk namun tidak terbatas melalui aplikasi yang dikelola oleh pihak-pihak selain Riswanda Noorisa. Sehubungan dengan ini, Mitra setuju untuk mengembalikan setelan Ponsel Pintar ke setelan pabrik atau menghapus setiap aplikasi lain di Ponsel Pintar yang dimiliki Mitra yang dapat digunakan sebagai sarana penyediaan jasa layanan kesehatan.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            h) Mitra menyetujui bahwa Riswanda Noorisa mempunyai hak: untuk meminta Mitra untuk menjaga jumlah uang yang ada dalam rekening Mitra pada bank yang ditunjuk oleh Riswanda Noorisa diatas batas tertentu, batas mana dapat ditentukan dan dirubah oleh Riswanda Noorisa atas dasar pertimbangannnya sendiri dari waktu ke dan akan diberitahukan kepada Mitra secara tertulis (baik melalui Aplikasi ALINAMED ataupun melalui media lainnya), dan untuk menahan akses Mitra kedalam Akun yang dimilikinya maupun menahan fitur fitur yang ada dalam Aplikasi ALINAMED dalam Akun yang dimiliki Mitra dalam hal (i) jumlah uang yang ada dalam rekening Mitra pada bank yang ditunjuk oleh Riswanda Noorisa berada dibawah batas yang telah ditentukan oleh Riswanda Noorisa, atau (ii) Mitra berhutang sejumlah uang kepada Riswanda Noorisa atau pihak-pihak yang terafiliasi oleh Riswanda Noorisa dan dalam status menunggkak pembayaran atas jumlah uang secara penuh atau jumlah sebesar cicilan atas hutang tersebut.
                            </p>`}
                show={false}
              />
              <AccordionItem
                title="Pembayaran Oleh Konsumen"
                desc={`<p class="text-justify no-indent tracking-tight">
                                a) Mitra menyetujui bahwa harga dan struktur pembayaran oleh penerima jasa atas jasa yang disediakan oleh Mitra dengan menggunakan Aplikasi ALINAMED ("Konsumen"), termasuk biaya pembatalan pemesanan oleh Konsumen adalah harga yang ditunjukan melalui Aplikasi ALINAMED.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            b) Mitra menyetujui bahwa Riswanda Noorisa dapat:
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            1.menentukan harga yang harus dibayarkan oleh Konsumen sesuai dengan ketentuan perundang-undangan yang berlaku, perubahan mana akan diberitahukan kepada Mitra secara tertulis (baik melalui Aplikasi ALINAMED ataupun melalui media komunikasi lainnya yang dipilih oleh Riswanda Noorisa);
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            2.mengambil bagian dari setiap pembayaran yang diterima oleh Mitra dari Konsumen atas jasa yang disediakan oleh Mitra kepada Konsumen untuk penggunaaan Aplikasi ALINAMED, dimana jumlah pembagian hasil adalah berdasarkan persentase tertentu atas jumlah yang diterima dari Konsumen (yang sudah termasuk pajak pertambahan nilai) dan dapat diberlakukan sewaktu waktu oleh Riswanda Noorisa dan akan diberitahukan kepada Mitra secara tertulis (baik melalui Aplikasi ALINAMED ataupun melalui media lainnya yang dipilih oleh Riswanda Noorisa); dan
                            </p>

                            <p class="text-justify no-indent tracking-tight mt-3">
                            3.untuk menarik jumlah pembayaran dari rekening bank Mitra pada bank yang ditunjuk oleh Riswanda Noorisa ataupun afiliasi dari Riswanda Noorisa untuk melakukan penarikan jumlah yang ditentukan oleh Riswanda Noorisa untuk keperluan pembagian hasil sebagaimana dinyatakan dalam pasal 2 diatas atau pembagian hasil yang dihitung berdasarkan cara lain yang ditentukan oleh Riswanda Noorisa, atau untuk membayar uang penalti atas pelanggaran yang dilakukan oleh Mitra.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            c) Dalam masa promosi untuk meningkatkan penggunaan Aplikasi ALINAMED, Riswanda Noorisa dapat melakukan kegiatan promosi dimana biaya atas kegiatan promosi tersebut akan dibebankan kepada Riswanda Noorisa. Bentuk dari promosi maupun besarnya biaya untuk promosi yang dapat dibebankan kepada Riswanda Noorisa adalah berdasarkan keputusan absolut Riswanda Noorisa yang akan ditentukan secara terpisah dari Perjanjian ini dan dapat berubah sewaktu-waktu.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            d) Bila di kemudian hari ada ketidaksepahaman atau perseteruan antara Riswanda Noorisa dan Mitra mengenai pembagian hasil, harga yang ditetapkan untuk dibayar oleh Konsumen, atau biaya promosi yang dapat dibebankan kepada Riswanda Noorisa, ditetapkan oleh Riswanda Noorisa pada saat masa promosi, maka Perjanjian ini berhak diakhiri secara sepihak oleh salah satu dari Riswanda Noorisa maupun Mitra dengan mengirimkan pemberitahuan secara tertulis kepihak lainnya (baik melalui Aplikasi ALINAMED ataupun melalui media lainnya).
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            e) Setiap Pihak dalam Perjanjian ini bertanggung jawab atas kewajiban pajak yang timbul kepada masing-masing Pihak berdasarkan peraturan perundang-undangan yang berlaku.
                            </p>`}
                show={false}
              />
              <AccordionItem
                title="Kode Etik dan Kewajiban Mitra"
                desc={`<p class="text-justify no-indent tracking-tight">
                                a) Dalam menyediakan jasa melalui Aplikasi ALINAMED, Mitra setuju untuk mematuhi kode etik yang ditetapkan oleh Riswanda Noorisa sebagai berikut:
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            1.Mitra wajib untuk mengajukan surat persetujuan tindakan medis kepada pasien untuk di tanda tangani pasien, sebelum di lakukan tindakan medis apapun, bila pasien setuju atas tindakan medis yang akan di lakukan;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            2.Mitra wajib menyerkatan surat penolakan tindakan medis kepada pasien, bila pasien menolak dilakukan tindakan medis apapun;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            3.Mitra wajib untuk mematuhi setiap peraturan lalu lintas, undang-undang dan peraturan hukum yang berlaku;
                            </p>

                            <p class="text-justify no-indent tracking-tight mt-3">
                            4.Mitra wajib untuk menjaga kebersihan penampilan, berpakaian rapi, bersepatu;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            5.Mitra dilarang minum minuman keras, mabuk, madat, memakai narkotika ataupun berada dalam keadaan dimana Mitra tidak mempunyai kesadaran penuh;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            6.Mitra dilarang melakukan perbuatan asusila, penganiayan, penghinaan, penipuan atau pengancaman pihak ketiga baik Konsumen, mitra kerja lainnya ataupun pihak ketiga lainnya;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            7.Mitra dilarang membujuk mitra kerja lain melakukan tindakan yang dapat diancam hukuman pidana;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            8.Mitra dilarang, baik dengan sengaja atau karena kelalaiannya, melakukan perbuatan atau membiarkan diri sendiri, Konsumen, dan/atau mitra kerja lainnya berada dalam keadaan yang dapat menimbulkan bahaya ke masing-masing pihak;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            9.Mitra dilarang melakukan kegiatan, baik dengan sengaja atau karena kelalaiannya, yang dapat menghasilkan pencemaran nama baik Riswanda Noorisa maupun Konsumen, karyawan dan afiliasi dari Riswanda Noorisa;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            10.Mitra dilarang untuk menentukan harga untuk jasa yang diberikan kepada Konsumen melalui Aplikasi ALINAMED selain dari harga yang telah ditentukan dan disetujui oleh Riswanda Noorisa;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            11.Mitra dilarang untuk membongkar atau menyebarluaskan informasi yang diberikan oleh Riswanda Noorisa, baik melalui Aplikasi ALINAMED maupun melalui cara lainnya, karyawan dari Riswanda Noorisa maupun afiliasi Riswanda Noorisa kepada Mitra tanpa persetujuan tertulis dari Riswanda Noorisa, sebagaimana berlaku;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            12.Mitra dilarang untuk meminta uang tambahan dalam bentuk apapun, termasuk namun tidak terbatas kepada dalam bentuk 'tips' kepada Konsumen selain dari harga maupun biaya jasa yang diberikan oleh Mitra yang akan ditentukan melalui Aplikasi ALINAMED;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            13.Mitra dilarang melakukan setiap tindakan yang dilarang oleh hukum ataupun dapat dianggap sebagai pelanggaran hukum yang berlaku;
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            14.Mitra dilarang melakukan setiap tindakan yang dapat melanggar Persyaratan, kebijakan maupun kode etik yang telah diinformasikan kepada Mitra oleh Riswanda Noorisa melalui media elektronik (antara lain info driver yang terdapat pada https://contendance.com/syarat-dan-ketentuan) dan media komunikasi lainnya yang dapat dipilih oleh Riswanda Noorisa.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            b) Mitra menyetujui (i) untuk melaporkan kepada Riswanda Noorisa dengan segera apabila Mitra melakukan pelanggaran atas Perjanjian ini dan/atau kode etik yang telah ditentukan ataupun mengetahui bahwa adanya pelanggaran Perjanjian ini dan/atau kode etik yang dilakukan oleh mitra Riswanda Noorisa lainnya dan (ii) untuk menerima dan menjalankan setiap sanksi yang diberlakukan oleh Riswanda Noorisa yang telah diinformasikan oleh Riswanda Noorisa kepada Mitra sebelumnya melalui media elektronik (antara lain info driver yang terdapat pada https://contendance.com/syarat-dan-ketentuan) dan media komunikasi lainnya yang dipilih oleh Riswanda Noorisa.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            c) Mitra menyetujui bahwa semua risiko maupun kewajiban yang disebabkan oleh kelalaian Mitra, yang termasuk namun tidak terbatas kepada keterlambatan Mitra dalam menyediakan jasa kepada Konsumen, kecelakaan dan kehilangan barang pada saat pengantaran, yang mungkin timbul dari maupun sehubungan dengan penyediaan jasa oleh Mitra kepada Konsumen merupakan tanggung jawab Mitra.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            Dengan ini Mitra menyetujui bahwa maupun Riswanda Noorisa tidak bertanggung jawab atas setiap kerugian, termasuk kerugian tidak langsung yang meliputi kerugian keuntungan, kehilangan data, cedera pribadi atau kerusakan properti sehubungan dengan, atau diakibatkan oleh penggunaan Aplikasi ALINAMED, maupun penyediaan jasa oleh Mitra kepada Konsumen. Mitra menyetujui bahwa Riswanda Noorisa tidak bertanggung jawab atas kerusakan, kewajiban, atau kerugian yang timbul karena penggunaan atau ketergantungan Mitra terhadap Aplikasi ALINAMED atau ketidakmampuan Mitra mengakses atau menggunakan Aplikasi ALINAMED.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            d) Mitra menyetujui bahwa apabila Mitra melanggar ketentuan dalam Perjanjian ini maupun kode etik yang ditetapkan oleh Riswanda Noorisa maupun dalam hal Mitra tidak memenuhi ketentuan-ketentuan yang ditentukan oleh Riswanda Noorisa, Riswanda Noorisa mempunyai hak untuk memberikan sanksi kepada Mitra dalam bentuk yang ditentukan oleh Riswanda Noorisa, termasuk, namun tidak terbatas kepada, pemberian peringatan tertulis, pembatasan atau penolakan akses Mitra kedalam Akun Mitra dalam Aplikasi ALINAMED, pengakhiran Perjanjian ini maupun memproses tindakan Mitra melalui gugatan perdata (termasuk untuk ganti rugi) maupun pidana, sebagaimana berlaku.
                            </p>`}
                show={false}
              />
            </>
          }
          show={false}
        />
        <AccordionItem
          title="Keberlakuan Perjanjian"
          desc={`<p class="text-justify no-indent tracking-tight">
                    a) Perjanjian ini berlaku selama 1 (satu) tahun sejak tanggal Mitra mengklik persetujuan secara elektronik pada akhir dari Perjanjian ini. Apabila Perjanjian ini tidak diakhiri oleh salah satu Pihak sesuai dengan syarat dan ketentuan Perjanjian ini, maka periode keberlakuan Perjanjian ini akan diperpanjang secara otomatis setelah berakhirnya periode 1 (satu) tahun yang disebutkan pada awal pasal ini.
                    </p>
                    
                    <p class="text-justify no-indent tracking-tight mt-3">
                    b) Riswanda Noorisa maupun Mitra berhak untuk mengakhiri Perjanjian ini secara sepihak sewaktu-waktu sebelum berakhirnya masa berlaku Perjanjian dengan mengesampingkan ketentuan pasal 1266 Kitab Undang-Undang Hukum Perdata.
                    </p>
                    
                    <p class="text-justify no-indent tracking-tight mt-3">
                    c) Dalam hal pengakhiran Perjanjian ini, paling lambat 3 (tiga) hari sejak berakhirnya Perjanjian, Mitra wajib melunasi setiap jumlah-jumlah yang masih terhutang kepada Riswanda Noorisa maupun pihak ketiga lainnya yang terkait termasuk tagihan Ponsel Pintar yang terhutang apabila ada kepada Riswanda Noorisa dan/atau Vendor dan/atau uang penalti atas pelanggaran yang dilakukan oleh Mitra. Pada saat Mitra melunasi setiap jumlah yang terhutang, Riswanda Noorisa akan mengembalikan setiap barang atau dokumen lainnya yang telah diserahkan oleh Mitra kepada Riswanda Noorisa pada waktu pendaftaran Aplikasi ALINAMED maupun yang mungkin diminta oleh Riswanda Noorisa dari waktu ke waktu. Riswanda Noorisa mempunyai hak untuk menahan barang atau dokumen lainnya yang telah diserahkan oleh Mitra kepada Riswanda Noorisa setelah Perjanjian ini berakhir dalam halnya Mitra mempunyai kewajiban, dalam bentuk apapun, kepada Riswanda Noorisa yang belum dipenuhi oleh Mitra.
                    </p>
                    
                    <p class="text-justify no-indent tracking-tight mt-3">
                    d) Mitra mengetahui dan menyetujui bahwa Riswanda Noorisa, berdasarkan hak yang diberikan kepadanya, mempunyai hak untuk menutup akses mitra kepada Akun yang dimilikinya dalam Aplikasi ALINAMED dalam halnya Perjanjian ini diakhiri.
                    </p>`}
          show={false}
        />
        <AccordionParent
          title="Ketentuan Lain"
          item={
            <>
              <AccordionItem
                title="Penyelesaian Sengketa"
                desc={`<p class="text-justify no-indent tracking-tight">
                                a) Mitra dengan ini membebaskan Riswanda Noorisa dari segala macam tuntutan, gugatan, atau tindakan hukum lainnya, baik dalam sebuah gugatan perdata maupun setiap gugatan pidana yang dialami oleh Mitra, dalam bentuk apapun terkait dengan jasa yang ditawarkan, disediakan, diselenggarakan atau diselesaikan oleh Mitra melalui Aplikasi ALINAMED.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            b) Apabila timbul perselisihan sehubungan dengan penafsiran dan/atau pelaksanaan dari Perjanjian ini maka Riswanda Noorisa dan Mitra sepakat untuk menyelesaikan perselisihan dimaksud secara musyawarah. Apabila perselisihan tidak dapat diselesaikan secara musyawarah maka Riswanda Noorisa dan Mitra sepakat untuk menyelesaikan perselisihan dimaksud melalui Pengadilan Negeri Surabaya, dengan tidak mengurangi hak Riswanda Noorisa untuk mengajukan laporan, gugatan atau tuntutan baik perdata maupun pidana melalui Pengadilan Negeri, Kepolisian dan instansi terkait lainnya dalam wilayah Negara Republik Indonesia.
                            </p>`}
                show={false}
              />
              <AccordionItem
                title="Kontrak Elektronik"
                desc={`<p class="text-justify no-indent tracking-tight">
                                a) Para Pihak setuju dan sepakat bahwa Perjanjian ini dibuat dalam bentuk Kontrak Elektronik dan tindakan mengklik persetujuan secara elektronik merupakan bentuk pernyataan persetujuan atas ketentuan Perjanjian ini sehingga Perjanjian ini sah, mengikat para pihak dan dapat diberlakukan.
                            </p>
                    
                            <p class="text-justify no-indent tracking-tight mt-3">
                            b) Para Pihak setuju bahwa tiada ada pihak yang akan memulai atau melakukan tuntutan atau keberatan apapun sehubungan dibuatnya maupun keabsahan Perjanjian ini berikut amandemen atau perubahannya dalam bentuk Kontrak Elektronik.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            c) Para Pihak setuju dan sepakat bahwa segala perubahan, amandemen atas Perjanjian ini dan Persyaratan (termasuk syarat dan ketentuan untuk penggunaan fitur fitur lain dalam Aplikasi ALINAMED), perubahan mana dapat dilakukan oleh Riswanda Noorisa atau pihak Afiliasi Riswanda Noorisa atas dasar pertimbangannya sendiri, juga dapat dibuat secara elektronik salah satunya dalam bentuk Kontrak Elektronik. Perubahan atas Perjanjian ini atau Persyaratan akan berlaku setelah Riswanda Noorisa mengumumkan perubahan Persyaratan tersebut baik melalui Aplikasi ALINAMED ataupun melalui media lainnya yang dipilih oleh Riswanda Noorisa dan Mitra menyetujui bahwa akses atau penggunaan Mitra yang berkelanjutan atas Aplikasi ALINAMED maupun kelanjutan kerjasama Mitra dengan Riswanda Noorisa setelah tanggal pengumuman atas perubahan syarat dan ketentuan dalam Persyaratan akan diartikan bahwa Mitra setuju untuk terikat oleh Persyaratan, sebagaimana telah diubah atau ditambahkan.
                            </p>`}
                show={false}
              />
              <AccordionItem
                title="Penggunaan Informasi Pribadi"
                desc={`<p class="text-justify no-indent tracking-tight">
                                a) Mitra menyetujui bahwa Riswanda Noorisa berhak untuk mengumpulkan dan menggunakan setiap informasi yang diberikan maupun dihasilkan oleh Mitra, informasi tersebut termasuk namun tidak terbatas kepada informasi pribadi yang diberikan oleh Mitra pada saat pendaftaran Aplikasi ALINAMED (yaitu, nama, alamat, keterangan Surat Izin Mengemudi, nomor telefon, rekening bank Mitra dan lainnya), informasi mengenai lokasi Mitra yang dapat diketahui melalui Aplikasi ALINAMED, informasi mengenai transaksi Mitra melalui Aplikasi ALINAMED, maupun informasi lainnya yang tersedia kepada dan dapat di akses oleh Riswanda Noorisa melalui pengunduhan, instalasi dan penggunaan Aplikasi ALINAMED oleh Mitra, termasuk namun tidak terbatas kepada memberikan ataupun penyebarluasan informasi tersebut kepada Pihak Ketiga manapun, termasuk pemberian informasi yang diperlukan kepada apparat yang berwenang yang memproses klaim jika terdapat keluhan, perselisihan, atau konflik, yang dapat termasuk kecelakaan, yang melibatkan Mitra dan Konsumen dan informasi atau data tersebut diperlukan untuk menyelesaikan keluhan, perselisihan, atau konflik maupun pemberian informasi untuk keperluan komersil Riswanda Noorisa
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight mt-3">
                            b) Mitra dilarang untuk menyebarluaskan atau membagi setiap informasi yang didapatkan olehnya melalui penggunaan Aplikasi ALINAMED, baik informasi mengenai Riswanda Noorisa maupun mengenai Konsumen, kepada pihak ketiga manapun tanpa mendapatkan persetujuan tertulis dari Riswanda Noorisa sebelumnya.
                            </p>`}
                show={false}
              />
              <AccordionItem
                title="Pengalihan"
                desc={`<p class="text-justify no-indent tracking-tight">
                                Mitra dilarang mengalihkan Perjanjian ini secara keseluruhan atau sebagian tanpa persetujuan tertulis sebelumnya dari Riswanda Noorisa. Mitra memberikan persetujuan kepada Riswanda Noorisa untuk dapat mengalihkan Perjanjian ini secara keseluruhan atau sebagian, termasuk namun tidak terbatas kepada: (i) anak perusahaan atau afiliasi; (ii) pihak ketiga yang pada saat pengalihan atau setelahnya menjadi pemilik saham, usaha atau aset Riswanda Noorisa dikarenakan sebab apapun (termasuk namun tidak terbatas kepada penggabungan, pemisahan, dan pengambilalihan).
                            </p>`}
                show={false}
              />
              <AccordionItem
                title="Keterpisahan"
                desc={`<p class="text-justify no-indent tracking-tight">
                                Jika ada ketentuan Perjanjian ini dianggap tidak sah, tidak berlaku atau tidak dapat dilaksanakan secara menyeluruh atau sebagian, maka berdasarkan hukum, ketentuan atau sebagian ketentuan ini harus dianggap sebagai bagian terpisah dari Perjanjian ini, tetapi keabsahan, keberlakuan, dan penerapan ketentuan lainnya dari Perjanjian ini tidak akan terpengaruhi.
                            </p>
                            
                            <p class="text-justify no-indent tracking-tight">
                            Dalam hal ini, pihak-pihak akan mengganti bagian ketentuan yang sudah tidak berlaku, tidak sah atau tidak dapat diberlakukan dengan ketentuan yang berlaku, sah, dan dapat dilaksanakan dan yang, sedapat mungkin, memiliki efek serupa seperti bagian ketentuan yang tidak sah, tidak berlaku, atau tidak dapat dilaksanakan sebagian, dengan mempertimbangkan isi dan tujuan Perjanjian ini
                            </p>`}
                show={false}
              />
              <AccordionItem
                title="Keseluruhan & Keberlanjutan Perjanjian"
                desc={`<p class="text-justify no-indent tracking-tight">
                                Perjanjian ini merupakan keseluruhan perjanjian dan pemahaman antara Mitra dengan Riswanda Noorisa berkenaan dengan permasalahan pokok serta menukar dan menggantikan semua perjanjian atau kesanggupan terdahulu antara Mitra dengan Riswanda Noorisa mengenai permasalahan pokok tersebut. Dalam hal Mitra sudah sebelumnya menyetujui dan/atau menandatangani perjanjian serupa dengan Riswanda Noorisa, maka perjanjian tersebut akan dilanjutkan dan digantikan dengan Perjanjian ini dengan syarat dan ketentuan sebagaimana diatur dalam Perjanjian ini.
                            </p>`}
                show={false}
              />
              <AccordionItem
                title="Persetujuan Para Pihak"
                desc={`<p class="text-justify no-indent tracking-tight">
                                Perjanjian ini dibuat dan diberikannya persetujuan secara elektronik oleh Riswanda Noorisa dan Mitra dalam keadaan sadar dan tanpa ada paksaan dari pihak manapun juga. Setelah tindakan mengklik persetujuan secara elektronik atas Perjanjian ini, maka RIswanda Noorisa dan Mitra setuju untuk dianggap bahwa Mitra telah membaca, mengerti serta menyetujui setiap dan keseluruhan pasal dalam Perjanjian ini dan akan mematuhi dan melaksanakan setiap pasal dalam Perjanjian dengan penuh tanggung jawab
                            </p>`}
                show={false}
              />
            </>
          }
          show={false}
        />
      </div>
      <CopyrightText />
    </>
  );
};

export default SKPengguna;
