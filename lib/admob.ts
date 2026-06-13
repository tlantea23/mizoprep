import { AdMob, RewardAdOptions, AdmobConsentStatus, AdOptions } from '@capacitor-community/admob';

const BANNER_ID = 'ca-app-pub-3940256099942544/6300978111' // Test
const INTERSTITIAL_ID = 'ca-app-pub-3940256099942544/1033173712' // Test  
const REWARDED_ID = 'ca-app-pub-3940256099942544/5224354917' // Test

export async function initAdMob() {
  await AdMob.initialize()
  
  const consentInfo = await AdMob.requestConsentInfo()
  if (consentInfo.isConsentFormAvailable && consentInfo.status === AdmobConsentStatus.REQUIRED) {
    await AdMob.showConsentForm()
  }
}

export async function showBanner() {
  const options: AdOptions = {
    adId: BANNER_ID,
    isTesting: true // Live ah false
  }
  await AdMob.showBanner(options)
}

export async function showInterstitial(): Promise<boolean> {
  try {
    const options: AdOptions = { adId: INTERSTITIAL_ID }
    await AdMob.prepareInterstitial(options)
    await AdMob.showInterstitial()
    return true
  } catch (e) {
    return false
  }
}

export async function showRewardedAd(): Promise<boolean> {
  try {
    const options: RewardAdOptions = { adId: REWARDED_ID }
    await AdMob.prepareRewardVideoAd(options)
    await AdMob.showRewardVideoAd()
    return true // En zo apiang unlock. AdMob in a check sa
  } catch (e) {
    console.error('Rewarded ad failed:', e)
    return false
  }
}