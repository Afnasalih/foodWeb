import React from 'react'
import './Hero.css'


export default function Heroscreen() {
  return (
    <div className='heroBase'>
      <div className="leftHero">
        <div className='leftcontent'>
          <p className='txt1'> Medium 2-topping <sup>*</sup> burger</p>
          <p className='txt2'>ARE YOU HUNGRY ?</p>
          <div className='dummy'> 
          <p className='txt3'>As well known and we are very busy all days advice you. advice you to call us of before arriving</p>
          </div>
          <div className='buttons'>
            <button className='learn'>LEARN MORE</button>
            <button className='see'>SEE OUR MENU</button>
          </div>
         <div className='social'>
          <button className='facebook'>
            <img className="imgface" src="data:image/png;base64,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" alt="" />
            <p className='facetxt'>FACEBOOK</p>
          </button>
          <button className='facebook'>
            <img className="imgface"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD////u7u7g4OBKSkrMzMzDw8P8/Pzc3NzIyMisrKzo6OjY2NilpaVdXV329va2trZ3d3eamponJydAQECgoKBTU1Nra2uLi4u7u7tlZWWXl5cbGxtYWFhOTk7T09ODg4MvLy85OTl7e3sREREkJCQ8PDyPj48YGBgQEBDtT9XuAAAI3klEQVR4nO2d6XqqMBBAQQUtWnHHtWJta/v+L3i1t1oCmWSyJ/04v+4CyhHIMpMliv86kesLME5rGD6tYfi0huHTGoZPaxg+rWH4tIbh0xqGT2sYPv4ZdgbHJHl6SpJk0NHxeV4ZJlmx2EcVPufjZaro6YthnlxOEcR5Imw5XG5//gQYbhQuVpx8swXtflhlApLDbBVFzz9/oRt2op36dWM5Tvc8v2+2Cerj8snq+/D7L0I3LKLI1l1MFyi9b14nvE/rTw4/x47v/0Q1HN0OGen0gNjALx+VPeuHz9Pi98jHj0E1HN8O+dRSVjNJemJ+N16OwIcdS+Jhf1w9zTD5f0zPjNaDnFu80Jn2m581nNUehu3jv2iG9zejMGd3ZSLnd+WrVuTkWfNdTlmGm8dhBgvUfCwteGVd+aDqy/fgLWcZvv0eyC27ZBnNVQSv1eOPwbGkf9D096uahln1SFwVJIz8E3rnvRv30+kX9N+V624Y9t+JQ7smBGfKgleY5VTlyxqGGXnoe14/QJ21DkEmJcOw/1o7+JVSNqtRGhckWit1w7RxdE+z4sW84Gv1++qGlEJ8rFVxaV6QrOVqhh3aCdtYH08WBKMBw5Beyulr3AxtCC6Ir6wZAj01bXfxw4bhkmHYhU7a6nkXdzYEoyHDMAPPOugQBH9ArZAPac3wAJ/X01D1C3TnFcgYhp03xolz8uZLoN4aRVG7FYThiHnml2JcI1fsTyBZDQej4zHZZMvd+jzdrgnDZ87JKXTxKHifronaczgkDKe8s2cqhriYoWY25FPKLwkK+VrD0ltIcibfwxxxykK6vLFTkJKc+uKG0i8jtcVrmlv/vWo4wJ1WQhJMLJUzBN81Y9Vwwz/nm4VMaEMi+KvK/w5D1RD/M2d0CwZWOhUk+7xhKNA5fREN+cMtXmP8hP8lDX/Tc0i4Va127h39qqFYkK83oJlArAx5gKzu31w1FO29lfjqPwdjt6Z41Nvy9/AGOupvvaD5zTPKlaUPFsj633aTrVJnR6qXAWYsCeyELx6cKl9dNWxGg1GMEf1GC2HgKtUmSdVQOozywk1RmU9VVCGKB/GWN5Xehl2unvVdPp8p8dVVw77gwAiC+Y7VzKHlaU3xTv7YRA9YcujAHcaQHkYQTzu1fgFhWKp++H4NNHQsNmnqvQLCENt9YtFb0iTtNUsbORbCUFNM+rRu1JHWytLPRuCajHnXE8DyFNmw+sJbq/GbDxBpqLVQn0+fH6N8bcUwlg3BmqH2/OVn7zxJhtLNJVHGTcF6/tDMF3/1FOshJM2XsGlovyuuE2p9XDM8ur5IFS40wcZYDJWGm2PeqIINQxeBW0084QzzT9cXKgutHK0bdl6zXM+oOhdA8ZR6D3iaOknzqTOHOqhVw8T1VapAL0hjucyMlwDlDGnoILegDzBzK5238A1IUCmq7xPw5JCqYen6MhWAakPS0E4HwAzw6MmqofUMmEamKEMHqXZt4AxdjHjRBTyM+a8Y4koapclWjlmhDK2mTzSDqw8tJ/m08oEyDLh/H51QhiH3nuYoQyfDBzWBu4d5oN37GzhDq5lazbxCgqRhwB3EBSQoMhvBa5CGlmZEmABX44ecmMG12izNfzQCrm8Rm8ofWgAeXl8zLF1fqSzwbJ6aoYMB53qAB2XX44yhxmrg2QP8+fhhAI9WbsSKAw1HgWmLpmGgNxGecNaM94cZj4KHtzYNw2ycgoK0NYZCbLrBnSeaocJgaGcwFn2g3V4n81nVYMyJpD7A4QVOKWMSmYZKQ9qdwJgOQS+EkPNl/YEx/xooZgN7FfeMRTugiiSs+Dfcw2esshtUEoO1CBJgmO+e9I1qNw+jKAXvYVhdDNYMwT/xHn6xplxBhnYWPNIEnDxkGAbViTpLGYb0mDLXrQYNQ4q6MVeUgbuOAbVNWYIMw3BSbezlZGDDcB5T9poAjDscTGnKXiuPYRhKacpZ8JBhGMrQDFajlG0YysAFzupjLMMw8qW85f+Zdck7//Pdw1vsiGkYRCyDt0Qeuz3AWu3TE7h7VLANA5hFw11YjW0Y+z/AhifIM/R+shd/iUPeb+D7LBP+kmo8Q88bNi9cQa6h561TxK5U/Df1xbUFgxNfEGHY8XjkMGYNTr6hz+ssIAQxhv7W+6j1N1E/Q+laBQC1MiXK0NO0N24lXJyhlyNQkHv8IA197O8jd2jEGlpe+RABdms/tKF3jRvsTg14Q88mfqHXTRcwjIceDSDG75YmYuhTLgO/ur+YYdz1ZPyCwPZMgoZxPPEh6/YlsK2PsGHcz9w7wqO6tRhOnIen0OWojGHXgyYqPBNP2TCfeNHhF9teQ8BwUPrR2xfcBgZrmD9b2fYOgegmxSjDfurPkhnCezEiDEelRwka8V1ReYajiyetmP+8i2/4zjTsXnzLkUrsaA8bdnfu2y51ZLZhAgwHOx+H0KK20sAYdpe+1AwkUoJNw+HSebMTQGhvIshwuPTx4fzmTVKwatj1Vy+K9tLb2N8NuzOv6r06H/I72X4bdne+vns/qGybHfVHF++HWSptfxr5FuilgAzfQ4bx0PPhFifpMuZueG1de9FzBxCKyUCGcZz62YiJVDdZ/jX0NZMtvFUmw9DLdZLFtztlGsad0rURSaHhBsa1dmnXo0zvXCSujTa89gttbh/GAlwmX9XwWnX44HjW84DSDeM4cZ0ILRTreK7h9T66fB/Hsh1BEcNruepq6EWh2Y8Ra8uf7YfaPte8qQU6DeO4v7HbXj1l8t1cOcMrA3vZwoK7W6sRwysTG8GbHnpzaAOGtxCOWcnezMDbJ2R4k9yZilNtM6N6aMPYTKxxmgrnysQRyeP301JbT/l1OtHacoERHovxdCkUQ4/7Q5mafjQriI+nuTYGOumslHpm36eztGOk1oORMbzTTbNL0ZsjdtvbL4rZ5MnijaugYninMzgm6WS5Phfb8fhwWK1Wh8N4uy2m58vzJjkOhpbvGokOQ79pDcOnNQyf1jB8WsPwaQ3DpzUMn9YwfFrD8GkNw+fvG/4DE9iQcnG+qVEAAAAASUVORK5CYII=" alt="" />
            <p className='facetxt'>TWITTER</p>
          </button>
          <button className='facebook'>
            <img className="imgface"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAjVBMVEUAAAD39/f////n5+f7+/v29vYwMDDz8/Pq6urm5ubw8PDt7e3Dw8OWlpbg4ODX19fKysqxsbF/f39aWlpUVFRISEg7Ozurq6ucnJwgICDZ2dnAwMDQ0NCNjY16enpubm4rKytlZWVDQ0MlJSUZGRmvr6+FhYUUFBRWVlaampqOjo5ycnINDQ0vLy84ODgticKkAAAJJ0lEQVR4nO3d2ZqqOBQGUIkBVJwnHCgVrWPNvv/jHdAqIbDDuCFuPv+LvuhuJEusBEKGltbctFQXoMI8bTTztNHM00YzTxvNFLeZVh2H9HrFDylsM9v5D+nUcUjv/gUWtRWi8fyH5D5LQCtq0x//qhW1kaAVs9GgFbIRqEauKWCrp5zlaQVsOhVafhuRvzU/eW2EaHltlGg5bY9Lgw7JZStCaxe40cp9CEjLZauLlvssMC2PrdAPsubbYyHZbbT+1vxkttGjZbYRpGW1PSwt6ZBsNpK0bDaatEy2Qu1a/kPQv40MtgK0x7jQ6ba6aPitfKqNLi3VRpiWZiP7t+Yn2UaalmyjTUu05Sonv8VinAHhQsT/1Iv8H+nnyvhtJNjktGgJuW5a3eHIcfqTycS2V4OX83S3d2fz+eJ4XF6Mw+F0Oq3Xr69vr+v1+nQ4/BiX5fK4mM9n7n4/Pb8MVrY9mWz7jrMZdi1T59FvpQgtwRbQBIp3Hms4Gm8nPmG6c98Xx5+3FnLefo6Ld3c3ffmw/036zmhoacF3qVmZLm6C7UbzP1DvXimD827/vri8YjuyZr1czPY7T2v3nU37emlThDKbT+OMj1/m36owKbm4q00yT2LzaJwNp6rLn5b1wErQwTa9zdlmprrkmbLrsFw2j6Y//DW750NWs0A2vc0cZVVGgSy78KUDbB7tn+ri5kwfxMVtHm2guqy58w/CxWwkaTAuaiP4g7wF+FlGbW0+Ul3KgunGastWlKatVReyYI6xCyfauho7qy5j4ayiOMHm3WgNVZewRCwut3m3x8xVXcASmTKpzb/z76ouX6lELlwrTKP81+bng4G226MoU126clnDNlP3/sEd1aUrmY3/ozTBMb0k77bC8ZuBoKdItL2rLlzJuCzcCSbaVJetbN5YuH9PsJmqy1Y6Qtdl2Eb2NjmIw2W2reqilc5WZmMr1UUrHZvJbHT6tmQ5S200eiST4kpthuqilc5RZuOqS4YQiY13VBcMIZI5Kw1o3n7vlgEb/eZNbOBCNmarLhhCbIntU3XBEDJgsG2numAI2Uls9JvuVmsmsS1VFwwhR9jWhKa79Q3XJZhPpoc94oflig7ZUPtdDW20QPy4HAlNkgnZNohn+GGc9S+IH5g5G9A2RjyDwfyhNxMF77vGoA3zlsu4VleM1/8kvwVtmLdcxm9VzMwXxE/NEhuyoXYqG/dmhnXqvd0Jve8I2TC/4cDmjwur86XeJ2jD/H6N8PMvZ059DcIUtGF+u4b4tshrEH4QPz0pLmibI57BiL5X9xoE9NGxYOagDfNWOWarrUE4QjZ+QDwDYKupQTiA7Rvmbwa0eTqr8gbhFbRhnkFiq6NBgGyoL99kthoahOAhJ7BZmCeQ23zdtsonBGCdJ97GPEGSreInhOABLrChjuRKtlXaIAxV2zStZ1bUHQrZMB+7U23+MKSKnhA2gA31TUeK7W+yz7CCLtERYEMd75Rsu0/RqqJBcAAbZndJsi08sc57QkB+WzsGbH3MEyTZInMGvQYBdRJJX6EtPh0St0FQaANnemI+IUA21LemUptsEiteg7AFbBOkz75GZkuYn8s2OE8IgM2q47olzqpmOKOl4zazlt9kAo2zMU6nxlaLjemtwyaneb9IrK6obXyd3hpschrr4r2vm6hoA6Q01sMcAKiifZPRmIY7ul2BTULjqK+P/EC2au+VYRpn2xPmaf1A98qVPuOANLRqXwj0jFPlsylEQ6z2hUDPphX2KQA0jlntC4H6FKrrCwJozKpsNhrUF4Q6rS9si9OYXuGkpi5gQx3RG7LFaF61X+WaKJ24TethniCwdaOyCqp9IcEmGKHxXJgnuNu6UVkV1b6QECg4LeYJ/mzdiKyaal8I+P4N8/XDr038W6us2g9nDY6dwewnvNkEGu7dvjQX8F0+Zg/v1RamVVrth7MAbZh9874t3HtcbbUfzgy0Yf4xeLaA5lX7B8TPTs4etGHeBRksWHGOjY+In5yWM2jDfNdnWHdZzet8wWPVMDvl/0aw1FLtC1lBNo65TtDvuFez/rUnJmDbjT2ml3EVSxjAY3oxOxUMxhVNy3JAG+bDqVH13b40Q8imYT7AnRTNfBAmZTZtPk7oMUCYR0V1Za5wTpI5Ysp+R4iZS2yU16/6iyux0V7k6ZazxPahumAIWcE23Lf5ijKB60nct1SKMpbYKK/z95chbGvAUkjh3snI+iWqC1Y+r9K1Weg33nOpjX7jvZfa6p4/iZ9PmQ19yED9CTdvog11qIKSyNdVo70iqp+21Ib6elFJhCEEwjq97KC6bCWzlNnaOvtSXbiS2UlsbZ1+RSlUk4GtYzZg9TFTg2y9678mvqzO7Y5LN6PX7VZT0tw74C/X/vJgvHd0/wDVxSsVkRa1kV5h2e8rCY/Sj143ws+n31pkAkLURnhRPL8BEEZ9xPZZIfuA+s6iY3ViNrI3zBaPDh6L7/3DaC5D2Wex0YxxG83+5VWcBu61RbBv4QWgwXukkWvlBhANtmmM1qsBG6RJbBrb0FlHej2CaTKbxpUMDimSqcYlM2JkNn8IP4Wl22fDWJOdwaZx1rMf+yZlfR6y6I1WNtuNN15N3dnx9GC7nL4d5jt7w68bgErnDCbbtNvOtH46Vnfj9Cf2x8tu71lrtnwbc/frPFjZ274z7PRuhbp1jshneqbaftPRI3s4c7PjY7f+tsK7vbsw8BZFeDMW7n7nSybbseNvnpywc3LC1OOMtrYZ/3fxDas102oPN8647++k/HndDfpr77ozf0Po647Ql8vyeFws5vP3meu6+6/ddQ9o37Dtj52N0+704ntAJ+4aHJ02kt/WAWhw7lt0W+A+3nB+j+lk3N85lMQdxjPZstOCk+rp/0/0kNxHpBySxVYTDf3byGAjetWy2KhetQw2urRUG2Famo0yLcVGmpZso01LtBGnJdmo0xJs5GlyG32a1NYAmszWBJrE1ggabCtCe8BvA7IVoD3khQZsTaEBtsbQ4rbm0KI23iBadMxTk2iirVk00dYsmmB7XFruI64Jz4F+WFqhqxa2NY4mjunNmQenBev05i9nL/8hVoFDCtMyv1ukmKeNZp42mnnaaOZpo5mnjWaeNpp52mjmP+apr/bnipQHAAAAAElFTkSuQmCC" alt="" />
            <p className='facetxt'>YOUTUBE</p>
          </button>
         </div>
        </div>
      </div>
      <div className="rightHero">
        <div className='rightcontent'>
          <div className='location'>
            <div className='loc1'>
              <p className='loctxt'>GREAT LOCATION</p>
              <p className='locsub'>Lorem Ipsum dolor sit amet, etur advoluptatem voluptatem</p>
            </div>
            <div className='loc1'>
            <p className='loctxt'>NATURE FIRST</p>
              <p className='locsub'>Lorem Ipsum dolor sit amet, etur advoluptatem voluptatem</p>
            </div>
            <div className='loc1'>
            <p className='loctxt'>HEALTHY FOOD</p>
              <p className='locsub'>Lorem Ipsum dolor sit amet, etur advoluptatem voluptatem</p>
            </div>
            <div className='loc2'>
              <p className='loctxt2'>PLAY VIDEO</p>
            </div>
          </div>
          <div className='number'>
          
            <div className='num1'>01</div>
            <div className='line'>
              <div className='dummyline'></div>
            </div>
            <div className='num2'>02</div>
            <div className='line'>
            <div className='dummyline'></div>
            </div>
            <div className='num2'>03</div>

            <div className='num3'></div>
          </div>
        </div>
    
      </div>
      <div className='image'>
        <img src="https://freepngimg.com/download/food/139396-food-plate-top-noodle-view.png" className="noodles1" alt="" />

      </div>
    </div>
  )
}
