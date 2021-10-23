localStorage
> Persistent storage
> save wrt to browser
> need to remove manaully

localStorage.setItem('Key','value')
localStorage.getItem('Key')
localStorage.removeItem('Key')

sessionStorage
> Non Persistent storage
> save wrt to tab
> automatically remove when browser close

sessionStorage.setItem('Mytoken','76bhy87t7g77')
undefined
sessionStorage.getItem('Mytoken')
'76bhy87t7g77'
sessionStorage.removeItemItem('Mytoken')
sessionStorage.removeItem('Mytoken')

cookies
> save wrt to website
> have some expire time

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1977943720.1634886656; _gat_gtag_UA_131256843_1=1'
document.cookie="user=admin; expires=Sun, 24 Oct 2021 01:00:00 UTC"
'user=admin; expires=Sun, 24 Oct 2021 01:00:00 UTC'