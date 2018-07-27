import Component from '../components/Component'

export default () => (
  <div>
    <h1>Main App</h1>
    <Component />
    <style jsx>{`
      div {
        color: mediumPurple;
        margin: auto;
        width: 16rem;
        text-align: center;
        border: 2px solid lightcoral;
      }
    `}</style>
  </div>
)
