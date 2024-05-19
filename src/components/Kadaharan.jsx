import React from "react";
import Card from "../layout/Card";
import basreng from "../assets/img/basreng.jpg";
import cakwe from "../assets/img/cakwe.jpg";
import ketoprak from "../assets/img/ketoprak.jpg";
import lontong from "../assets/img/lontong.jpg";
import seblak from "../assets/img/seblak.jpg";
import surabi from "../assets/img/surabi.jpg";
import tahusumedang from "../assets/img/tahusumedang.jpg";
import tapeketan from "../assets/img/tapeketan.jpg";

const Kadaharan = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Kadaharan
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <Card
          img={basreng}
          title="Basreng"
          description=" Basreng adalah cemilan yang berasal dari Jawa Barat. Singkatan dari “bakso goreng,” basreng terbuat dari irisan bakso yang digoreng hingga garing dan renyah. Setelah itu, basreng dibalur dengan berbagai bumbu tambahan seperti cabai bubuk, bumbu BBQ, dan bubuk keju🍢🧀"
        />
        <Card
          img={cakwe}
          title="Cakwe"
          description="Cakwe adalah gorengan berbentuk panjang dan renyah. Biasanya disantap dengan saus sambal atau dicelupkan ke dalam bubur ayam🍢🌶️"
        />
        <Card
          img={ketoprak}
          title="Ketoprak"
          description="Ketoprak adalah makanan khas Betawi yang juga populer di Bandung. Terdiri dari lontong, tahu, bihun, dan sayuran, ketoprak disiram dengan bumbu kacang dan kecap manis🍲🥬"
        />
        <Card
          img={lontong}
          title="Lontong"
          description="Lontong adalah makanan yang terbuat dari beras yang dibungkus dengan daun pisang dan direbus hingga matang. 🍚🌿"
        />
        <Card
          img={seblak}
          title="Seblak"
          description="Seblak adalah jajanan unik yang populer di Bandung dan Indonesia. Terbuat dari kerupuk yang direbus dan dimasak dengan sayuran serta sumber protein seperti telur, daging ayam, ceker ayam, dan lainnya. Rasanya super pedas dan memiliki aroma wangi karena kencur🌶️🍲"
        />
        <Card
          img={surabi}
          title="Surabi"
          description="Surabi Bandung berbeda dengan surabi Solo. Surabi Bandung berbentuk bulat seperti mangkuk dan disajikan dengan saus gula merah. Ada juga yang diberi taburan oncom untuk rasa gurih🥞🍯"
        />
        <Card
          img={tahusumedang}
          title="Tahu Sumedang"
          description="Tahu Sumedang adalah tahu goreng khas Sumedang, Jawa Barat. Tahu ini memiliki tekstur yang renyah di luar dan lembut di dalam. Biasanya disajikan dengan sambal kacang 🥟🌶️"
        />
        <Card
          img={tapeketan}
          title="Tape Ketan"
          description="Tape ketan adalah makanan fermentasi yang terbuat dari ketan. Rasanya manis dan sedikit beralkohol. Biasanya disajikan sebagai camilan atau hidangan penutup🍶🍬"
        />
      </div>
    </div>
  );
};

export default Kadaharan;
