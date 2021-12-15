/* eslint-disable no-unused-vars */
const localConfig = {
  resourceServerUrl: "http://apigateway.dev.127.0.0.1.nip.io/v2.0",
  identityServiceUrl: "http://identity.dev.127.0.0.1.nip.io/oidc",
  accountConnectUrl: "https://bank-chooser.moneyhub.co.uk/account-connect.js",
  client: {
    client_id: "e6fb62eb-943b-4298-9bb0-7ec55c6ea9f5",
    client_secret: "93fe1bde-e42f-447c-95c8-df95c327162a",
    token_endpoint_auth_method: "private_key_jwt",
    id_token_signed_response_alg: "RS256",
    request_object_signing_alg: "RS256",
    redirect_uri: "http://localhost:3333",
    response_type: "code",
    keys: [
      {
        "kty": "RSA",
        "kid": "JWBybEw1s_JIjKPXvPzRNQfdLAkj90IJJ2hFd6ooqhM",
        "use": "sig",
        "e": "AQAB",
        "n": "gVw22A-Na-vefTrx-4RMC4OC5bGh8Rp31KexXrCHcKFiPA08DF-OltbYwV7wzFYwfFy8gdqwCL5cu_ofLu58UUth_8rumioDDc6TkSMZEHrFvN0x33-Kx6RYIihevagLJi6mgRaXoObL4V5DnGnmKlNlM6x675_vOacCmJ45XrzUkYKRUjeIaGB4r6Am4UeChmiSEfn9Vk1-Yjgzft7Oe1RYOnBVJHRkGCYCVp0nDpA66YcsreZbij7Aq5YQF41TQZtn5NoUfo2koX5S3YekRvtWRO-xkeQLaltjMFkb-52AMST0bKL3ZdsmMVhKVvsQ2VeTR-EB2Q0mjwRa8hz7kw",
        "d": "AhytUI3Ac1igg07pEIAydaWqB3IFANi7yB8MyEz9iRs5bV2R82nD_DZ5x35zVAK8O-uPsFcPtLTW8sK8q5l9Mh6W9QQtLRsufZU315DJIfm_LLw3yjxc2bGXNseN9G6_79mnIkhqJVhfT8ioNe-MsHg4GMXiI_NqhnhxlGhQ63kHtlKeyNZanH1s9RDf6WhnpCqManK7XDVylk9ftvAso1LEQoH3mSVbtnAA7bPv1ZNgHjgWxfwr7xs-6tqlkTjmvps9ZKFeuy0-hYYiwBzmKy2Rq3P7cRKJmIySXiLo-yp7wUDSIbnS-x6_pWaVIEo_ljVstzHWJcasCBwY_rXZUQ",
        "p": "3z_nTxPFj-3QNN25zu0m0wkOePkSpXOfHLwMNCWNtMEstxSEUXY5QB5gXDUBdLKlgh_oYLfFvWUMlQOmAjB1qK-bkidEdWm6KZcuU-ElB5fsO4KW1qtOcXGO12aQ32oIC9Jb1-GoFYFvnupQ3ky9pHZK51UefawOg-zsYPDiMBc",
        "q": "lFZP3l3BDkm_SmbBQ8nxioIXclbVrzoN5Fa_2Xjst0Z_xiqnFZjyrk_4hanGZPU6OhSyLY8F10KUvJ54zkr84MJVAkXGlOblQeoYbIEDzP6NtJfX7FpjMtVZfE6AMYt9yZtq_kQr_8_otp0a6igOjzVZfWKZCzTu5ABUAP0zIeU",
        "dp": "F6Tv_ZsNeIHqZD77d-P8EavK4ZsXk3hcaLGt5TP4_yTadIVywiHwTE8rS3i9r7tf9hklBmFQSw_RtlKNmXvCalw28NLB2GGbOt5tJKsaveQkO-VHznKUO0WYqE2PmGnlckMUQRgAMk7kIIOWjwS3rRxuMHP-Z7b6TpSgMGAyxH8",
        "dq": "iTlLi4cpuCELADYMpbxkYWC1dgXUidRn04tY0ULnoShrvZPpm7YxEoZSfrwvF2gwZFiO-Ext99PVKqRjV1vRkc7Uu1R3P3pWLWL1EzNKo9H8n0s06aY4TGdH8BHiz3Kee-n10aCZH35jZsPxiRpjVaHh1ndm4xIlyPBwxbV2Hu0",
        "qi": "u7dPk0NlgtfbqInKoKYlN8yGgsSsb3VVbSv8GjGsSmKqdPy2qZxjFO1YLYoRTO1GNdOt8RSV63gpRphdnk8nViSgu-ObwhPDSIjJMTiJNrHZmxub1IWs_PumBmlxQgM4aHpbem6Y1R7fRdZoVJ-mPCTNppPCEoPDDv621Ht1KlM",
      },
    ],
  },
}

const devConfig = {
  resourceServerUrl: "https://api-dev.moneyhub.co.uk/v2.0",
  identityServiceUrl: "https://identity-dev.moneyhub.co.uk/oidc",
  accountConnectUrl: "https://bank-chooser-dev.moneyhub.co.uk/account-connect.js",
  client: {
    client_id: "d9dc9d5e-d190-438c-b658-a4be3779100d",
    client_secret: "d525fd48-e983-4364-9bec-3faff52b8fa7",
    token_endpoint_auth_method: "private_key_jwt",
    id_token_signed_response_alg: "RS256",
    request_object_signing_alg: "RS256",
    redirect_uri: "http://localhost:3333",
    response_type: "code",
    keys: [
      {
        "kty": "RSA",
        "kid": "JWBybEw1s_JIjKPXvPzRNQfdLAkj90IJJ2hFd6ooqhM",
        "use": "sig",
        "e": "AQAB",
        "n": "gVw22A-Na-vefTrx-4RMC4OC5bGh8Rp31KexXrCHcKFiPA08DF-OltbYwV7wzFYwfFy8gdqwCL5cu_ofLu58UUth_8rumioDDc6TkSMZEHrFvN0x33-Kx6RYIihevagLJi6mgRaXoObL4V5DnGnmKlNlM6x675_vOacCmJ45XrzUkYKRUjeIaGB4r6Am4UeChmiSEfn9Vk1-Yjgzft7Oe1RYOnBVJHRkGCYCVp0nDpA66YcsreZbij7Aq5YQF41TQZtn5NoUfo2koX5S3YekRvtWRO-xkeQLaltjMFkb-52AMST0bKL3ZdsmMVhKVvsQ2VeTR-EB2Q0mjwRa8hz7kw",
        "d": "AhytUI3Ac1igg07pEIAydaWqB3IFANi7yB8MyEz9iRs5bV2R82nD_DZ5x35zVAK8O-uPsFcPtLTW8sK8q5l9Mh6W9QQtLRsufZU315DJIfm_LLw3yjxc2bGXNseN9G6_79mnIkhqJVhfT8ioNe-MsHg4GMXiI_NqhnhxlGhQ63kHtlKeyNZanH1s9RDf6WhnpCqManK7XDVylk9ftvAso1LEQoH3mSVbtnAA7bPv1ZNgHjgWxfwr7xs-6tqlkTjmvps9ZKFeuy0-hYYiwBzmKy2Rq3P7cRKJmIySXiLo-yp7wUDSIbnS-x6_pWaVIEo_ljVstzHWJcasCBwY_rXZUQ",
        "p": "3z_nTxPFj-3QNN25zu0m0wkOePkSpXOfHLwMNCWNtMEstxSEUXY5QB5gXDUBdLKlgh_oYLfFvWUMlQOmAjB1qK-bkidEdWm6KZcuU-ElB5fsO4KW1qtOcXGO12aQ32oIC9Jb1-GoFYFvnupQ3ky9pHZK51UefawOg-zsYPDiMBc",
        "q": "lFZP3l3BDkm_SmbBQ8nxioIXclbVrzoN5Fa_2Xjst0Z_xiqnFZjyrk_4hanGZPU6OhSyLY8F10KUvJ54zkr84MJVAkXGlOblQeoYbIEDzP6NtJfX7FpjMtVZfE6AMYt9yZtq_kQr_8_otp0a6igOjzVZfWKZCzTu5ABUAP0zIeU",
        "dp": "F6Tv_ZsNeIHqZD77d-P8EavK4ZsXk3hcaLGt5TP4_yTadIVywiHwTE8rS3i9r7tf9hklBmFQSw_RtlKNmXvCalw28NLB2GGbOt5tJKsaveQkO-VHznKUO0WYqE2PmGnlckMUQRgAMk7kIIOWjwS3rRxuMHP-Z7b6TpSgMGAyxH8",
        "dq": "iTlLi4cpuCELADYMpbxkYWC1dgXUidRn04tY0ULnoShrvZPpm7YxEoZSfrwvF2gwZFiO-Ext99PVKqRjV1vRkc7Uu1R3P3pWLWL1EzNKo9H8n0s06aY4TGdH8BHiz3Kee-n10aCZH35jZsPxiRpjVaHh1ndm4xIlyPBwxbV2Hu0",
        "qi": "u7dPk0NlgtfbqInKoKYlN8yGgsSsb3VVbSv8GjGsSmKqdPy2qZxjFO1YLYoRTO1GNdOt8RSV63gpRphdnk8nViSgu-ObwhPDSIjJMTiJNrHZmxub1IWs_PumBmlxQgM4aHpbem6Y1R7fRdZoVJ-mPCTNppPCEoPDDv621Ht1KlM",
      },
    ],
  },
}

const prodConfig = {
  resourceServerUrl: "https://api.moneyhub.co.uk/v2.0",
  identityServiceUrl: "https://identity.moneyhub.co.uk",
  accountConnectUrl: "https://bank-chooser.moneyhub.co.uk/account-connect.js",
  client: {
    client_id: "1e1b2556-6e29-426c-9a52-8cd5b9019c72",
    client_secret: "af54205b-abeb-41fb-b79b-a8fc64b075f7",
    token_endpoint_auth_method: "private_key_jwt",
    id_token_signed_response_alg: "RS256",
    request_object_signing_alg: "RS256",
    redirect_uri: "http://localhost:3001",
    response_type: "code",
    keys: [
      {
        "kty": "RSA",
        "kid": "JWBybEw1s_JIjKPXvPzRNQfdLAkj90IJJ2hFd6ooqhM",
        "use": "sig",
        "e": "AQAB",
        "n": "gVw22A-Na-vefTrx-4RMC4OC5bGh8Rp31KexXrCHcKFiPA08DF-OltbYwV7wzFYwfFy8gdqwCL5cu_ofLu58UUth_8rumioDDc6TkSMZEHrFvN0x33-Kx6RYIihevagLJi6mgRaXoObL4V5DnGnmKlNlM6x675_vOacCmJ45XrzUkYKRUjeIaGB4r6Am4UeChmiSEfn9Vk1-Yjgzft7Oe1RYOnBVJHRkGCYCVp0nDpA66YcsreZbij7Aq5YQF41TQZtn5NoUfo2koX5S3YekRvtWRO-xkeQLaltjMFkb-52AMST0bKL3ZdsmMVhKVvsQ2VeTR-EB2Q0mjwRa8hz7kw",
        "d": "AhytUI3Ac1igg07pEIAydaWqB3IFANi7yB8MyEz9iRs5bV2R82nD_DZ5x35zVAK8O-uPsFcPtLTW8sK8q5l9Mh6W9QQtLRsufZU315DJIfm_LLw3yjxc2bGXNseN9G6_79mnIkhqJVhfT8ioNe-MsHg4GMXiI_NqhnhxlGhQ63kHtlKeyNZanH1s9RDf6WhnpCqManK7XDVylk9ftvAso1LEQoH3mSVbtnAA7bPv1ZNgHjgWxfwr7xs-6tqlkTjmvps9ZKFeuy0-hYYiwBzmKy2Rq3P7cRKJmIySXiLo-yp7wUDSIbnS-x6_pWaVIEo_ljVstzHWJcasCBwY_rXZUQ",
        "p": "3z_nTxPFj-3QNN25zu0m0wkOePkSpXOfHLwMNCWNtMEstxSEUXY5QB5gXDUBdLKlgh_oYLfFvWUMlQOmAjB1qK-bkidEdWm6KZcuU-ElB5fsO4KW1qtOcXGO12aQ32oIC9Jb1-GoFYFvnupQ3ky9pHZK51UefawOg-zsYPDiMBc",
        "q": "lFZP3l3BDkm_SmbBQ8nxioIXclbVrzoN5Fa_2Xjst0Z_xiqnFZjyrk_4hanGZPU6OhSyLY8F10KUvJ54zkr84MJVAkXGlOblQeoYbIEDzP6NtJfX7FpjMtVZfE6AMYt9yZtq_kQr_8_otp0a6igOjzVZfWKZCzTu5ABUAP0zIeU",
        "dp": "F6Tv_ZsNeIHqZD77d-P8EavK4ZsXk3hcaLGt5TP4_yTadIVywiHwTE8rS3i9r7tf9hklBmFQSw_RtlKNmXvCalw28NLB2GGbOt5tJKsaveQkO-VHznKUO0WYqE2PmGnlckMUQRgAMk7kIIOWjwS3rRxuMHP-Z7b6TpSgMGAyxH8",
        "dq": "iTlLi4cpuCELADYMpbxkYWC1dgXUidRn04tY0ULnoShrvZPpm7YxEoZSfrwvF2gwZFiO-Ext99PVKqRjV1vRkc7Uu1R3P3pWLWL1EzNKo9H8n0s06aY4TGdH8BHiz3Kee-n10aCZH35jZsPxiRpjVaHh1ndm4xIlyPBwxbV2Hu0",
        "qi": "u7dPk0NlgtfbqInKoKYlN8yGgsSsb3VVbSv8GjGsSmKqdPy2qZxjFO1YLYoRTO1GNdOt8RSV63gpRphdnk8nViSgu-ObwhPDSIjJMTiJNrHZmxub1IWs_PumBmlxQgM4aHpbem6Y1R7fRdZoVJ-mPCTNppPCEoPDDv621Ht1KlM",
      },
    ],
  },
}

module.exports = devConfig
