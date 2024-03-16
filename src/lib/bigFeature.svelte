<script>
        export let plant;
        export let FeatureTitle;
        export let altColor;
        export let shopNow;
        export let href
        export let hrefClass
</script>

<div class="largeFeatureCon {altColor}">
      <div class="largeFeature">
        <img class="largeFeatureImg" src={plant} alt="plant" />
        <div class="largeFeatureText">
          <h3 class="largeFeatureTitle">{FeatureTitle}</h3>
           <a href="{href}" class="{hrefClass}">
            <div class="{shopNow}">
            <p class="shopNowText">Shop Now</p>
            </div>
          </a>
        </div>
      </div>
    </div>

<style>

.largeFeatureCon {
  height: 90vh;
  background-color: var(--dark-green);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shopNow {
  border: black solid 1px;
  border-radius: 34px;
  width: 8rem;
  text-align: center;
  margin-top: 1rem;
  transition: .3s;
}

.shopNow:hover {
  background-color: var(--dark-green);
  cursor: pointer;
  color: white;
}

.shopNowText {
  margin: 0.5rem;
}

.largeFeature {
  font-family: "encodeSansReg";
  max-width: 18rem;
}

.largeFeatureTitle {
  font-family: "encodeSansLight";
  padding-top: 1rem;
}

.shopNowAlt {
  border: white solid 1px;
  border-radius: 34px;
  width: 8rem;
  text-align: center;
  margin-top: 1rem;
  transition: .3s;
}

.shopNowAlt:hover {
  background-color: white;
  cursor: pointer;
  color: var(--dark-green);
}

.altColor {
  background-color: var(--tan);
  color: black;
}

.learnMore {
  margin-top: 1rem;
  text-decoration: underline;
}

@media screen and (min-width: 660px) {
     .largeFeatureCon {
    justify-content: left;
  }

  .largeFeature {
    display: flex;
    flex-direction: row;
    max-width: 80rem;
    padding: 2rem;
    gap: 5rem;
    align-items: center;
    margin: auto;
  }

  .largeFeatureTitle {
    font-size: 46px;
  }

  .largeFeatureImg {
    max-width: 25rem;
  }

  .largeFeatureText {
    margin-left: 5rem;
    width: 25rem;
  }
}


.white {
  text-decoration: none;
  color: white !important;
}

.white:hover{
  color: var(--dark-green) !important;
}

.black{
  text-decoration: none;
  color: black !important;
}
</style>