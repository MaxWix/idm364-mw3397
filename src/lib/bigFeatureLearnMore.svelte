 <script>
        import plant from '$lib/assets/plantHolder.png';
        export let FeatureTitle;
        export let altColor;

</script>
 
 <div class="largeFeatureCon {altColor}">
      <div class="largeFeature">
        <img class="largeFeatureImg" src={plant} alt="plant" />
        <div class="largeFeatureText">
          <h3 class="largeFeatureTitle">{FeatureTitle}</h3>
          <p class="learnMore">Learn More</p>
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

    .largeFeature {
  font-family: "encodeSansReg";
  max-width: 18rem;
}

.largeFeatureTitle {
  font-family: "encodeSansLight";
  padding-top: 1rem;
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
</style>