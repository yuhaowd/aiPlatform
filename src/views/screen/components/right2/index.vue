<template>
  <div class="box7">
    <div class="box7-border">
      <div class="top-title-left">
        <span class="box7-title">工单统计</span>
      </div>
      <div class="top-title-right">
        <span>
          <i class="square-icon1" aria-hidden="true" role="presentation"></i>
          <span style="color: #fff; font-size: 14; margin-right: 8px">
            待处理
          </span>
        </span>
        <span>
          <i class="square-icon2" aria-hidden="true" role="presentation"></i>
          <span style="color: #fff; font-size: 14; margin-right: 8px">
            处理中
          </span>
        </span>
        <span>
          <i class="square-icon3" aria-hidden="true" role="presentation"></i>
          <span style="color: #fff; font-size: 14; margin-right: 8px">
            已拒绝
          </span>
        </span>
        <span>
          <i class="square-icon4" aria-hidden="true" role="presentation"></i>
          <span style="color: #fff; font-size: 14">已处理</span>
        </span>
      </div>
      <div class="box7-bottom">
        <div class="wo-finish">
          <div class="wo-title-finish">掉漆</div>
          <div class="wo-content-finish">
            <div style="font-weight: blod; font-size: 16px">33号厂房</div>
            <div style="margin-top: 10px">06-11/19:47</div>
          </div>
        </div>
        <div class="wo-waiting">
          <div class="wo-title-waiting">划痕</div>
          <div class="wo-content-waiting">
            <div style="font-weight: blod; font-size: 16px">31号厂房</div>
            <div style="margin-top: 10px">06-11/19:47</div>
          </div>
        </div>
        <div class="wo-reject">
          <div class="wo-title-reject">
            <i class="fas fa-mask mr-2"></i>
            未带口罩
          </div>
          <div class="wo-content-reject">
            <div style="font-weight: blod; font-size: 16px">13号厂房</div>
            <div style="margin-top: 10px">06-11/19:27</div>
          </div>
        </div>
        <div class="wo-finish">
          <div class="wo-title-finish">掉漆</div>
          <div class="wo-content-finish">
            <div style="font-weight: blod; font-size: 16px">73号厂房</div>
            <div style="margin-top: 10px">06-11/19:47</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.box7 {
  background: url(../../images/cell-bg.cd48c156.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex: 3 1 0%;

  margin-top: 10px;
  .box7-border {
    background-image: url(../../images/background-1.png),
      url(../../images/background-2.png), url(../../images/background-3.png),
      url(../../images/background-4.png);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 25px, 25px, 25px, 25px;
    background-position:
      top left,
      top right,
      bottom left,
      bottom right;
    width: 100%;
    height: 100%;

    .top-title-left {
      background: url(../../images/cell-title-left.93093e78.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 14px;
      height: 32px;
      width: 140px;
      .box7-title {
        font-size: 16px;
        color: #0ff;
        margin-left: 36px;
        margin-top: 20px;
      }
    }
    .top-title-right {
      float: right;
      margin: -34px 10px 0 0;
      .square-icon1 {
        display: inline-block;
        width: 15px; /* 正方形的宽度 */
        height: 15px; /* 正方形的高度 */
        background-color: #6943a7; /* 正方形的背景色 */
        margin-right: 5px; /* 正方形与文本之间的间距 */
        vertical-align: middle; /* 与文本垂直对齐 */
      }
      .square-icon2 {
        display: inline-block;
        width: 15px; /* 正方形的宽度 */
        height: 15px; /* 正方形的高度 */
        background-color: #5bdbf6; /* 正方形的背景色 */
        margin-right: 5px; /* 正方形与文本之间的间距 */
        vertical-align: middle; /* 与文本垂直对齐 */
      }
      .square-icon3 {
        display: inline-block;
        width: 15px; /* 正方形的宽度 */
        height: 15px; /* 正方形的高度 */
        background-color: red; /* 正方形的背景色 */
        margin-right: 5px; /* 正方形与文本之间的间距 */
        vertical-align: middle; /* 与文本垂直对齐 */
      }
      .square-icon4 {
        display: inline-block;
        width: 15px; /* 正方形的宽度 */
        height: 15px; /* 正方形的高度 */
        background-color: orange; /* 正方形的背景色 */
        margin-right: 5px; /* 正方形与文本之间的间距 */
        vertical-align: middle; /* 与文本垂直对齐 */
      }
    }
    .box7-bottom {
      padding: 35px 15px 10px;
      height: calc(100% - 46px);
      display: flex;

      .wo-finish {
        flex: 1;
        background-color: #0d1c4e;
        margin-left: 10px;
        background:
          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAEuCAYAAADm7LBKAAACuUlEQVR4nO3UP4gUdxxA8eehxEbFyquEdEqwjaBYKCTWNlGLdKlMf+a6NAH/YBsIqSJI1EoQxMJC0E7BFCIEi7SpDkRTSC4YRnbhSLh7O7IrV7wHy7Kz85397G/+7Lh5/h0j2w1cAy6MHdyki8CV6Vc7Rw4fBm4BR+aEGbo8eX+PWhox+A3wdM6YjahhpWZaoX3AT8BZ2W8NeAa8BF4Bb4C/R8KWDXQU+BX4dIt9HgI/TN7XRwL+12anbNi+AjwSzLDUp4AH88CwySlbBn4BvpTZx8AqMPo2HQMaENeBAzPM/jxvDBtO2a7J8t+fETP0Yt4YJis0XCM3gc9Hzr5dFOg3YO8iDv4hLW0nDCOf1B+lQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5A1gH7fbqBjwKNtYHnfAFoDvgBuj5z9c1GgobfAOeDqIn5kTBsv6nfACvAt8M8Mx/hq0aBpPwJngL9k9hrw9ccADd0FTsp18glwHXgOfA+cBg5Otn9wO7cYfDK5A+8Bh7bY77PJ67+9BtZngF0Crkw/bAUa+gM4DtwBToz813tm3O8ysB9YZcYn9fSxcGskaEzfTa7dJVuhacNj4TxwA9i9MBYs/wumB0JRY7rp4gAAAABJRU5ErkJggg==)
            no-repeat,
          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAEvCAYAAAAtsGPvAAAC4ElEQVR4nO3TP8hVdRyA8Ud7STMtpZawpckGIYQWBZXIoYjGhAqhQRtboyGooaGtKWhqiYiGSMIkB1uD/qNruCg2CNkQQWLGgfvGy4X3PPde3xMNz7Pce7nf3zkfzu93tn3y4h02tBs4wN13E/hllausbfj+IHAeOLwFoL+Bd4C3gdvLLNw++3wA+HKLMOvXfRP4Gti/7MI9M8yRLcJs7CjwM/DcoguGLdsHvLXkjYaztgN4ZHbmnho5ew8BXwDvAa8Dt8YuPH+o76ZDs5seG7nGd8BJ4MpmA9s3+2OFfgROAJ+NLH0S+Al44b8AMduO08AfIzPDC/Qp8AGwc2rQ0G/AVwvMvQp8Czw+NYixMzLXQeB74JWpQaNv0ly7gA+Bj4a3d22JhVP3MnBpqie0atv+b6DJztDKBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYFG+gv4YSrQnSXnbwLPABfWJgJdX2L2KvAscJkJt+y+BecuAYfXMVOB7gVOLTB3ETg6e0L/ttWgx4DzwEGZ+3i2Tb/P/zF/hobfexa48c7ZtuwGHgWeAI4DJ4B7ZO27wBubHfyNoPuBs8DTC4BW6TbwGvD+2Np10F7gHHBkIsyfwEvA5zY4gB4e3n/g0ESYG8DzwDeLDA+gHcCZiTBD14BfF5oE/gH9YkSb/OFWIQAAAABJRU5ErkJggg==)
            no-repeat;
        background-size:
          15px 100%,
          15px 100%;
        background-position: left, right;
        .wo-title-finish {
          background-color: #6943a7;

          color: #fff;
          text-align: center;
          margin: -10px 12px;
          font-size: 16px;
        }
        .wo-content-finish {
          color: #a859ff;
          text-align: center;
          margin-top: 25px;
        }
      }
      .wo-waiting {
        flex: 1;
        margin-left: 10px;
        background-color: #0c2b55;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAEuCAYAAADm7LBKAAACx0lEQVR4nO3Vv6vVdRyA8eemJUIEEgQh2FRuYSBRg/QDEhz8CwysWVpaBZdoERvbkoZ+QVNjk8GltkCEC4KXtDSkJZAKIR2MDxwbrnqf7zmeA3d4nu0cPu/D67zPh+9ZO7F5mwU6AnwJHFhkeEtXgLeAm+PtJ+Yc3gWcAX5YEmb00uzz9o8Xu+cY3D/byptLgmxFXQDengo6DnwOPLvNmXvABnAZuAH8C/w1J+w1A+0BzgIfAGuPOHMLOAecB/6YE/BA24EOAt8Ar2xz5tpYM/Dr40Lu96hLfRL4WTCj95aJ4SEbegb4FHh3wuwmsL5MzFbQYeBr4MWJs5eWjWH2k43L+iHw0xyY0Z1VgMaGTgGfrOLDF2ls6OmdgmGBv46VF8gKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyBugqcG8ngb4FTgJ3doDn/5/sC+AYcGuO2T9XCRpdAI4A1yfOrq0aNNoAXgcuTpg9DuxdNWh0E3gD+F5mXwC+A55fNWj092wD52X+KPAL8BXwPnAI2Pc4oLUTm7ftzGngowXuzF3gnwnnfpt9+d/Hi90TBj6eXfTPgKfmAD05cVvjzI/AO8Dm1Cf1Io+FeRr3cR14ecqG7jceC6/O7slqguf+Ay2gRVirCJQ7AAAAAElFTkSuQmCC),
          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAEvCAYAAAAtsGPvAAAC0UlEQVR4nO3TP6iVZQCA8cd7zaDECEGiockInBykLUIQEUSlJTPbInBuCtqiVaTGFkHCVBDc1EVaGpQwAjGkocYgqKE/aBDKB+fC4XS8z7mH+8Udnmc6vN/758d33m/b6R//ZqbXgJ2zg0v0A/Cfza3tM8/fBS4Aq5sAug+cBO5tZNHK1O93NhEztA+4DXywDOht4MtNxKz1HPAF8BWwa5EFw1+2DfgVOLKBg1YnBzwP7AX2AwcngHkNb/8AcAr4dr2N513qZRtwZ4BP1oE9Aj4CPgMez5uwMm9wyf4Czk7e1D9P2eJZ4BxwDdg9NmitO5ND1+s4cBd44/8ADV1cYM4rwC3g42nHWKCfFpw3fFSfAjeBl8YE/bHB+YeA74DDY4GWaXhD17cSaGhlq4FGu0NLF8gKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWyAlmBrEBWICuQFcgKZAWSvt5KoMvAkTFBv29g7lngFPBo+0iYlQWvw7/Ah8DnawNjgU4CL8ich8B7wNXpwc0GrQLvA+dk3m/AceCb2QfzQDuBZxY4/MUJYA/wKvA6cAJ4Wdb9PFxe4MG8h7Ogt4BLwI4FQMt0FzgK/PK0tdMX7zRwZUTMDeDN9TDToDPAhREv+XngGPCnTRwAwz24M7kDYzR82t8Dj3Vz4AmhHEG1wQ2zxAAAAABJRU5ErkJggg==);
        background-repeat: no-repeat, no-repeat;
        background-size:
          15px 100%,
          15px 100%;
        background-position: left, right;
        .wo-title-waiting {
          background-color: #3a9cc8;

          color: #fff;
          text-align: center;
          margin: -10px 12px;
          font-size: 16px;
        }
        .wo-content-waiting {
          color: #5bdbf6;
          text-align: center;
          margin-top: 25px;
        }
      }
      .wo-reject {
        flex: 1;
        margin-left: 10px;
        background-color: #0c2c56;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAEuCAYAAADm7LBKAAACgklEQVR4nO3TP2sUURhG8WeXiKkUBCGVkE4LO0WwFm20ttLKyvSxtTOmV/Ab6BcQrASDhZUiNiLYaiWIEUSDrwzZxcE/e2aW2bDFOfBWOzvzm7n3ppK+s1rJvUpqoNlsP78v5lQlrwfETGdzHtCNSr4uADOdW81zVsIdTfIgyVW48lOSl0neJfmcZDfJjw73b7dGX+VcJe/hzZ5WcqGSlTn241/zvx/Gk3X9DpitSkZDQGbtobVKnnRY852hMf8CXazkY8dNeH1oTBt0qJK7lfzscSrOLAq0XsmLOY7p6UWAmmP/KsmRnsdzYY2XCZMJaKkSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFGCKEGUIEoQJYgSRAmiBFEN6O2ygc4n2VkCy361P4creVRJ9Zjj9fv/g037RqNKtpcJNJ2blex1AG0cFKiZK5XsAuhbJdcOCtTM2Uo+dPhSbyq5XcmlSk5M9uPcoFHN3vPrSR4nOTnHefmSZK/DdVtJtv88ZbPmWCXPep7AvnOny5K1p1mGhwtG3a9kTEvWbpTkcpLVOZavW8nzX13VNHcfjAAxAAAAAElFTkSuQmCC),
          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAEvCAYAAAAtsGPvAAACvUlEQVR4nO3TMY8UdRiA8ecEFBREEwoMhoRGKEyMnVTGxEJDY0NFY80XILR2dLRUNlr6BQgUGrEx0JwtsdFoogUmxkIlf7LkNtxB5JlddojF8yTvZfcys/PbmXe3Bns6DJzm2bsH3F3rU8ajOTrguwFjA3N/wGcD9o2919BZHvDqgFsbwuyebwacWBV0ZMC3M2CW8/uAc1NBix06Cby14pNe7NpLwBs7O/eB7N7iWleBS8A/U3foWefdAV/L3fp+wCl7ZJucAwO+EtQfA84/L9BiXh/w54Tdujbg4PMAMeEuLWd7wJnd576w4jJP7ceJx70N3AY+Xf5jLtDTf0l7exn4HPhi8evdPxNonS4A23PdoXXb+r+BZtuhtQtkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICPaW/gTtzgcaKx98DPgKu758J9MsKx/4EfAz8wIyP7NDE47aBs0vMw8bm58UB2wOGzM0BRx+//qZBp3YuZJgvd+BPfMbjO7R4f2TCrT6481gOA28C7wDvAx8C++TcK8Dl/1z8XbpXBtyY8O3WnX8HXLS7vHzx2oBbM2L+GvDJlMe++HNswJ0ZMb8NeG/qHm4NOAEcn7A36/Yz8Oukk4EHFKCP/JYRqisAAAAASUVORK5CYII=);

        background-repeat: no-repeat, no-repeat;
        background-size:
          15px 100%,
          15px 100%;
        background-position: left, right;
        .wo-title-reject {
          background-color: #b80000;

          color: #fff;
          text-align: center;
          margin: -10px 12px;
          font-size: 16px;
        }
        .wo-content-reject {
          color: red;
          text-align: center;
          margin-top: 25px;
        }
      }
    }
  }
}
</style>
