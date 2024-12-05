import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import HanhDong from './routes/HanhDong.jsx';
import KinhDi from './routes/KinhDi.jsx';
import PhieuLuu from './routes/PhieuLuu.jsx';
import KhoaHoc from './routes/KhoaHoc.jsx';
import KiemHiep from './routes/KiemHiep.jsx';
import TheThao from './routes/TheThao.jsx';
import HaiHuoc from './routes/HaiHuoc.jsx';
import TinhCam from './routes/TinhCam.jsx';
import HoatHinh from './routes/HoatHinh.jsx';
import LichSu from './routes/LichSu.jsx';
import GiaDinh from './routes/GiaDinh.jsx';
import VienTuong from './routes/VienTuong.jsx';
import My from './routes/My.jsx';
import VietNam from './routes/VietNam.jsx';
import TrungQuoc from './routes/TrungQuoc.jsx';
import HanQuoc from './routes/HanQuoc.jsx';
import MoiNhat from './routes/MoiNhat.jsx';
import P2017 from './routes/P2017.jsx';
import P2018 from './routes/P2018.jsx';
import P2019 from './routes/P2019.jsx';
import P2020 from './routes/P2020.jsx';
import P2021 from './routes/P2021.jsx';
import P2022 from './routes/P2022.jsx';
import P2023 from './routes/P2023.jsx';
import BoHQ from './routes/BoHQ.jsx';
import BoTQ from './routes/BoTQ.jsx';
import BoVN from './routes/BoVN.jsx';
import BoMy from './routes/BoMy.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/theloai/hanhdong" element={<HanhDong />}></Route>
        <Route path="/theloai/kinhdi" element={<KinhDi />}></Route>
        <Route path="/theloai/phieuluu" element={<PhieuLuu />}></Route>
        <Route path="/theloai/khoahoc" element={<KhoaHoc />}></Route>
        <Route path="/theloai/kiemhiep" element={<KiemHiep />}></Route>
        <Route path="/theloai/thethao" element={<TheThao />}></Route>
        <Route path="/theloai/haihuoc" element={<HaiHuoc />}></Route>
        <Route path="/theloai/tinhcam" element={<TinhCam />}></Route>
        <Route path="/theloai/hoathinh" element={<HoatHinh />}></Route>
        <Route path="/theloai/lichsu" element={<LichSu />}></Route>
        <Route path="/theloai/giadinh" element={<GiaDinh />}></Route>
        <Route path="/theloai/vientuong" element={<VienTuong />}></Route>
        <Route path='/quocgia/my' element={<My />}></Route>
        <Route path='/quocgia/vietnam' element={<VietNam />}></Route>
        <Route path='/quocgia/trungquoc' element={<TrungQuoc />}></Route>
        <Route path='/quocgia/hanquoc' element={<HanQuoc />}></Route>
        <Route path='/phimle/moinhat' element={<MoiNhat />}></Route>
        <Route path='/phimle/2017' element={<P2017 />}></Route>
        <Route path='/phimle/2018' element={<P2018 />}></Route>
        <Route path='/phimle/2019' element={<P2019 />}></Route>
        <Route path='/phimle/2020' element={<P2020 />}></Route>
        <Route path='/phimle/2021' element={<P2021 />}></Route>
        <Route path='/phimle/2022' element={<P2022 />}></Route>
        <Route path='/phimle/2023' element={<P2023 />}></Route>
        <Route path='/phimbo/my' element={<BoMy />}></Route>
        <Route path='/phimbo/trungquoc' element={<BoTQ />}></Route>
        <Route path='/phimbo/vietnam' element={<BoVN />}></Route>
        <Route path='/phimbo/hanquoc' element={<BoHQ />}></Route>




      </Routes>
    </BrowserRouter>
  </StrictMode>
);
